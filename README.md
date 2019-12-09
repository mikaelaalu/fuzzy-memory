# Fuzzy-memory
<img src="https://media.giphy.com/media/NusOH30J7QiJy/source.gif" width=100%; >

School assignment Yrgo 2019

Created fuzzy memory, built with HTML, CSS and Javascript.

## Requirements
- There should be at least 8 pairs and a maximum of 10 pairs.
- The pairs should be randomly positioned before a new game starts.
- The project should implement nice graphical user interface.
- There should be a replay button to restart the game when finished (Note: This should be done with JavaScript and not with a page reload).
- The project should look, feel and work similarly in Google Chrome and Firefox.
- The project should be written in HTML, CSS and JavaScript (Note: You may not use any other programming languages).
- The project can't use any third-party frameworks such as jQuery.

## How to play
Clone down the project to you computer:
- $ git clone https://github.com/mikaelaalu/fuzzy-memory
- Open the index.html file in your browser.

Or visit https://fuzzyymemory.netlify.com 

## Testers
* Victor Ljungblad 
* Oskar Joss

## Code review
By Michaela Lundborg

* When you get a pair it is still possible to click on the cards and close them again.

* index.html:23 - You don’t need the class “button” on your button-tag 

* script.js:122 - You could use const button = document.querySelector(“button”) and skip the dot (if you remove the class)

* You use arrow functions and “regular” ones in your javascript, in the future you could stick to one of these.

* To make the code even easier to read you could divide the javascript into smaller files, e.g. one for the functions and one for all the data.

* Great job with commenting your code!

## Licence 
This project is licensed under the MIT License - see the [LICENSE](https://github.com/mikaelaalu/fuzzy-memory/blob/master/LICENSE) file for details.

