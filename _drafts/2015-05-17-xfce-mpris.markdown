---
layout: post
title: "XFCE: Control MPRIS Players With Media Keys"
modified:
categories: tech
excerpt:
tags: []
image:
  feature:
date: '2014-02-16 16:01:26 +0100'
---
As of February 2014, Gnome has this by default and for some questionable reason XFCE doesn't. 

The following script checks for media applications that are running first. If the PlayPause or Play are given as arguments and there is no media app running it will launch the default one. Otherwise, it will simply control the running ones.

{% highlight sh %}
#!/bin/bash
# This script takes the following parameters as input and sends the appropriate message on DBUS to control media players.
# Valid parameters are: Play, Pause, PlayPause, Stop, Next and Previous

apps=(`qdbus | grep org.mpris.MediaPlayer2 | sed 's/.*.//'`)

if [ -z $apps ] && ([ $1 == Play ] || [ $1 == PlayPause ]); then
	defaultplayer=(`cat ~/.local/share/applications/mimeapps.list | grep audio-player | cut -c 24-`)
	`grep '^Exec' /usr/share/applications/$defaultplayer | tail -1 | sed 's/^Exec=//' | sed 's/%.//'` &
else
	for app in "${apps[@]}"
	do
		qdbus org.mpris.MediaPlayer2.$app /org/mpris/MediaPlayer2 org.mpris.MediaPlayer2.Player.$1
	done
fi
exit 0
{% endhighlight %}

Two things have to be done in XFCE to make this work:

- Enable GNOME services at startup to be able to use the media keys without editing config files and wasting your time. This is done under Sessions and Startup -> Advanced Tab.
- Assign shorcuts under Keyboard -> Shortcuts Tab like so, assuming a "mpris-global.sh" script name, as in the following image:

{%include image.html url="/images/mpris.png" position="center" %}


