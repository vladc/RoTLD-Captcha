# RoTLD CAPTCHA
![captcha breaker](http://i.imgur.com/NWyxetu.gif) 

A Firefox (>34) extension that breaks rotld.ro's audio CAPTCHA, with 100% accuracy.

### Flawed implementation

RoTLD's audio CAPTCHAs are composed of 6 characters, in the a-f0-9 range. Each character is concatenated to the audio file, along with a header ("your captcha code is") and random amount of white noise between the characters. 

The major flaw is that the header, noise and characters are binary concatenated to the file (ie ```cat header.mp3 a.mp3 1.mp3 6.mp3 noise.mp3 d.mp3 b.mp3 f.mp3 > output.mp3```), without resynthesizing the output. One can do a simple binary search for signatures and find the CAPTCHA code.

## Installation

You can install by dragging the latest [rotld_captcha.xpi](https://github.com/vladc/RoTLD-Captcha/releases) file to your add-on page.
