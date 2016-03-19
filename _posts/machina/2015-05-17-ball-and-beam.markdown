---
layout: post
title: "Ball and Beam PID Controller"
modified:
categories: machina
excerpt: PID control demonstrator project during a 3-month internship abroad
tags: ["ISTIA", "Angers", "ball and beam", "bertrand cottenceau", "PID", "Arduino"]
image:
  feature:
date: '2013-08-05 21:12:00 +0200'
---

Between February and July 2012 I was in France with a one semester Erasmus exchange program at I.S.T.I.A. Angers. First three months consisted of courses and labs and during the last three months I had to do this project.
The big machine with a rotating beam was "rotting" in the automation lab and my tutor thought of reviving it and transform it into a PID demonstrator for one of his labs.  

My job was to design a circuit that would control the machine, program it, and make it somewhat user friendly and suitable for a lab. The hardware was mainly comprised of:

- a monochrome LCD (parallel control)
- IR sensor and remote control (Philips RC5 protocol)
- level converters (0---5V range to -12---+12V range and viceversa) with op amps to PWM drive the motor
- Arduino Mega

The project was a success and Bertrand Cottenceau, my tutor, sent me a word about one year later:

> I confirm that your project on Ball and Beam is still working.  
> Bertrand (from Cluj, 4/6/14)

Please excuse the video quality.
<video width="640" height="480" controls="controls" preload="none">
	<source src="{{site.url}}/images/ball-and-beam.webm" type="video/webm">
</video>
