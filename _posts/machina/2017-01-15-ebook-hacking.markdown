---
layout: post
title: "Notes on how I hacked my eBook reader"
modified:
categories: machina
excerpt: Don't try this at home
tags: []
comments: false
share: false
image:
  feature:
date: 2017-01-15
---

{% include _toc.html %}

## Problem definition
I've got this itch to hack into devices that I own (or not!). This time it's about my eBook reader, [4fff n618](https://en.wikipedia.org/wiki/4FFF_N618) which is it's codename. Commercially, it goes for a dozen names like `bq Avant`, `OYO`, `Papyre 6.2`, `Prestigio PER5062B`, `Icarus Sense E650`, `Pandigital Novel` and so on. Mine is branded `Prestigio` and I used `bq` firmwares on it. The `bq` firmware that I use below (versioned 2.5) is probably the most recent and the most locked-down of all. 

## What's in the archive
By unpacking the firmware [archive](http://booq.s3.amazonaws.com/bqAvant_OS2.5.zip) we end up with this:

    $ ls -lGn
    total 259780
    -rw-rw-r-- 1 1000   5877168 Mar  2  2011 20110302D.bin
    -rw-rw-r-- 1 1000   1191424 Aug 11  2011 image.pak
    -rw-rw-r-- 1 1000 258939858 Oct 14  2011 rootfs.img
    -rw-rw-r-- 1 1000      2372 Oct 10  2011 upfw_post_script.sh

`file rootfs.img` outputs `rootfs.img: POSIX tar archive (GNU)` which is the signature of tarballs created with GNU's `tar`. But `tar -xvf` can't extract it! Apparently `cpio` *kind of* extracts the contents by running `cpio -id < rootfs.img`. With warnings. I suspect the developers used a customized packing script that introduces some non-standard offsets.

By exploring it using `fzf` or `ag` search tools, one quickly finds the `/mnt/etc/passwd` and `/mnt/etc/shadow` files with which we can crack the password. Using lowercase and uppercase versions of ten statistically most used letters, it is a matter of a few hours to crack the password depending on hardware. 

    $ crunch 7 7 etaoinshrdETAOINSHRD -o passwords.lst
    $ unshadow mnt/etc/passwd mnt/etc/shadow > unshadow.out
    $ john --wordlist=mnt/etc/passwords.lst unshadow.out 

Which eventually print:
    
    $ john --show unshadow.out 
    root:SReader:0:0:root:/root:/bin/bash

    1 password hash cracked, 0 left    

## Post-upgrade script exploit
The post upgrade script `upfw_post_script.sh` is presumably executed after the upgrade. To test this, I modified the script so as to mount each disk device and write the output of `echo $(ls -alh)` into a file located on the SD card (`mmc1p1`) just to test if it's being executed. A post-upgrade script exploit is indeed too good to be true, as apparently is not executed at all.

## /linuxrc exploit by repacking rootfs.img

Right on the root filesystem there is a `/linuxrc` script that contains some startup commands. A few lines jump to the eye. 

    # howard, hotkey to do touch calibration (KEY_PAGE_DOWN, KEY_PAGE_DOWN)
    /usr/local/sbin/touch_cmd 9 109 109
    #/usr/local/sbin/hotkey_cmd /usr/local/sbin/usbdebug.sh 104 109
 
I trust Howard's line of code because I know it works. When the device boots, if the next page (`KEY_PAGE_DOWN`) is pressed, the touch calibration shows up. The final call to `hotkey_cmd` is the answer to why did the USB serial connection was suddenly unavailable with `firmware 2.5` after being present in pretty much all the older firmwares from `bq`, `Papyre`, `OYO` etc. De-commenting the line would give us a way to serially access the console.

Compessing back the archive with both `tar -cvf` and `find /path/to/modified/rootfs/dir | cpio --create --format='ustar' > rootfs.img` result in faulty upgrades. First, the upgrade progress bar skips over a large chunk. Then, there is a success message at the end regardless of the large skip. Booting into the partly upgraded firmware is impossible, the progress bar hangs. 

**Bricked device?** No. There is tiny a `Reset` button on the back which puts it back on rails, ready to accept `Back`-`Previous` keypress duringboot to relaunch firmware upgrade. **Phew!!**.

## /linuxrc exploit using hex editor
Unable to pack the `rootfs.img`, I go back to the original tarball. There is apparently no progress so far. Yet I realise that a tarball is just a simple archive with no CRC of it's own. That means that by modifying characters in it and keeping the filesize intact, one should be able to pass a modified tarball to the upgrade. 

The easiest way is to search for `hotkey` string. Second result gets me to the line I want. Replace `#` with a whitespace. Replace both `109` with `108`, save, `cp` to SD card, power on with the USB cable plugged, the `Previous` button pressed and the `usbserial` kernel module loaded, and there it is:

    [25988.132471] usb 3-1: generic converter now attached to ttyUSB0

## Serial tty
`picocom` with typical parameters shows me the login:

    picocom --b 115200 --f n --p on --d 8 /dev/ttyUSB0
    ...
    Samsung SMDK Board on a armv5tejl
    Samsung login: root
    Password: SReader
    [root@Samsung ~]# uname -a
    Linux Samsung 2.6.21.5-cfs-v19 #183 Wed Mar 2 05:37:47 CST 2011 armv5tejl unknown
    [root@Samsung ~]# 

Voilà! We can do whatever we want from the root prompt.

## Initial tweaks
`mount` informs me that the filesystem is mounted read-only. `mount` knows how to fix that:

    mount -o remount,rw /dev/root /

For this to be persistent across reboots, the line needs to be put in `/mnt/etc/rc.local`. 

Whenever the battery gets fully charged, an event is presumably triggered which disconnects the USB so the serial terminal goes kaput. I tracked the source to be `apmd`. The following command disables this behavior. 

    sed -i "s|SUSPEND_ON_AC=true|SUSPEND_ON_AC=false|g" /mnt/etc/apmd_proxy


*To be continued when the itch gets to me again...*
