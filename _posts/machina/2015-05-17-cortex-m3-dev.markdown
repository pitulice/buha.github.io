---
layout: post
title: "Setting Up Free Tools for ARM Cortex-M3 Development Under Linux"
modified:
categories: machina
excerpt: "Code::Blocks IDE, CodeSourcery compiler and Segger JLink debugger configuration"
tags: ["ARM", "Cortex-m3", "Linux", "Code blocks", "Segger", "JLink", "debugger", "CodeSourcery"]
comments: false
share: false
date: '2013-03-23 21:02:00 +0100'
---
{% include _toc.html %}

I own a [development board](http://blog.tkjelectronics.dk/2011/09/review-poweravr-nxp-lpc1768-board/) that bundles a 512kB flash and 64kB RAM ARM Cortex-M3 processor, JTAG SWD debugger, touchscreen LCD, USB host/device, ethernet, serial ports and many more. It comes with a lot of code examples and template projects for Keil compiler and IDE but most of the code documentation is in chinese. As Keil toolchain doesn't run on Linux I made up my own environment(IDE, flasher, debugger) to develop on this board.

**Code::Blocks** (IDE), **CodeSourcery** toolchain (compiler), **lpc21sp** flasher and in-IDE debugging using **gdb** and the on-board **Segger JLink** SWD USB debugger are the magic ingredients to make this work. 

# Sourcery CodeBench Lite
This is basically a GCC toolchain for ARM (compiler, linker, objdump etc.). It’s “Lite” because it’s command line only. There are also paid solutions offered by them but the point of this article is to take advantage of free powerful tools. So dowload it from their website (make sure to download the ARM edition) and execute. The Linux installer is graphical so it’s very easy to install it. I installed it under /opt/CodeSourcery so I had to add /opt/CodeSourcery/bin to PATH. This is done with the command “export PATH=$PATH:/opt/CodeSourcery/bin”. To permanently add this to your PATH variable, append to ~/.bashrc the following:

>PATH=$PATH:/usr/local/bin/arm:/opt/CodeSourcery/bin

Now that you have it installed and configured you can run “arm-none-eabi-gcc -v” to see that the compiler is there, ready to use.

# JLink 
Since my board has this chip I use the drivers from JLink but yours might have something different. The tools can be found here. Again, the Linux version contains a stripped down version of what the Windows one does. But that’s not that much of a problem for us since C::B will do the job for us if well configured.
The installation is very simple and the steps detailed in a README file. First, install some dependencies:

 >\# apt-get update  
 >\# apt-get -install libusb libreadline

Then extract the archive and ‘cd’ to the extracted directory:

 >\# cp libjlinkarm.so.* /usr/lib  
 >\# ldconfig

There are two more executables **JLinkExe** and **JLinkGDBServer** in the  directory. Copy them if you want to /usr/share/bin or something like that to be more easily accessible. **JLinkExe** can be used for flashing. Execute it as root, then chose the target and then write the command for loading an image at offset 0 (in this case). Type ‘?’ for help in the menu if you need to know more.

 >\# JLinkExe  
 >\> exec device LPC1768  
 >\> loadbin /path/to/file.hex , 0

JLinkGDBServer is the server the arm-none-eabi-gdb needs to connect to when debugging. So anytime you want to debug in Code::Blocks, type “sudo JLinkGDBServer” in a terminal to start the server first!!

# Flashing
There are probably more ways of flashing your device. In my case, from a Linux host, I have two choices: either JLink through USB (as described under JLink heading) or lpc21isp. I have personally encountered some issues when flashing with JLink so I prefer using the other method.
lpc21isp is a very nice little piece of command-line software that can flash your LPC1100 / LPC1300 / LPC1700 / LPC2000 by ISP. It’s of course specific for NXP devices but every microcontroller should have one or another ISP programming software.  

There are also bootloaders for USB reflashing. On the website of NXP I found one of this kind and after plugging the USB  I could see the ROM of the device as a binary file just as I would see it on a thumb-drive. It’s a very attractive way of flashing since it’s just drag & drop. But I don't know and I did not investigate why it works only under Windows 7 and not under my Kubuntu 12.04 Linux by default.

# Code::Blocks setup

{% include image.html url="/images/cortex-m3-dev/pic1.png" width="600px" position="center" %}

Create a new project from File->New->Project. Select Console Application from the following menu, chose the programming language, then the path and name of the project. The compiler is GNU ARM GCC. Select your newly created project from the left-side navigator. Go then to Project->Proprieties and a windows like the following should appear. Check the This is a custom Makefile box and set the execution directory to where your Makefile is.

{% include image.html url="/images/cortex-m3-dev/pic2.png" width="300px" position="left" %}

Switch to Build Targets tab and add targets to the left side. The targets are the makefile targets. In my case, all will compile the project, clean will clean all compiler generated files and flash will flash the chip. Select Console Application under Type. Then, if you have a custom makefile, specify it under Output Filename. <br><br><br><br><br>
{% include image.html url="/images/cortex-m3-dev/pic3.png" width="300px" position="left" %}
Also, because I like to have all the compiler generated files in one single directory and not mixed up with the sources, when I compile, a directory named gcc is created under the project’s root directory. So under the debugger tab I specify it as a search dir. Under Additional GDB commands you must specify the commands the arm-none-eabi-gdb must execute prior to connection. I have associated them with all target but you can make a debug target if you want. 

Because the instructions are not visible I’ll reproduce them here:


 >\# connect to the J-Link gdb server  
 >target remote localhost:2331  
 >  
 >\# Enable flash download and flash breakpoints.  
 >\# Flash download and flash breakpoints are features of  
 >\# the J-Link software which require separate licenses  
 >\# from SEGGER.  
 >  
 >\# Select flash device  
 >monitor flash device = LPC1768
 >  
 >\# Enable FlashDL and FlashBPs  
 >monitor flash download = 1  
 >monitor flash breakpoints = 1  
 >  
 >\# Clear all pendig breakpoints  
 >monitor clrbp  
 >  
 >\# Set gdb server to little endian  
 >monitor endian little  
 >  
 >monitor interface SWD  
 >  
 >\# Set JTAG speed to 1000 kHz  
 >monitor speed 1000  
 >  
 >\# Reset the target  
 >monitor reset  
 >monitor sleep 100  
 >  
 >\# Set JTAG speed in khz  
 >monitor speed auto  
 >  
 >load  
 >thbreak main

There you go! Compile with Ctrl+F9, debug by starting JLinkGDBServer from a terminal and then by pressing F8. The following photo shows C::B visual debugger in action.

{% include image.html url="/images/cortex-m3-dev/pic4.png" width="600px" position="center" %}

