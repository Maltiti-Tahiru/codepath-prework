# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Maltiti Tahiru**

Time spent: **15** hours spent in total

Link to project: [Link to glitch](https://glitch.com/edit/#!/ambiguous-noisy-clock)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!
- [x] Added a user propmt for how many rounds will be played

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](https://i.imgur.com/QbQ6UMr.gif)

![](https://i.imgur.com/F3O8ki9.gif)

![](https://i.imgur.com/vq9K36H.gif)

![](https://i.imgur.com/fbKQVVZ.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
https://www.w3schools.com/
https://developer.mozilla.org/en-US/
https://youtube.com


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[The biggest challenge I encountered was creating the countdown clock. At first, I struggled with displaying the countdown, as I had very little knowledge of JavaScript. But looking at the code that was already written I noticed patterns and understood how some of the JavaScript keywords worked. One of the biggest advantages of working with code is the ability to look up solutions, guides and at documentation for any problems you’re facing. With that in mind I then looked at documentation on how to manipulate HTML content with JavaScript and was easily able to solve my issue of displaying the countdown clock. My next step was looking at how to use setInterval and clearInterval as was recommended. I looked at and practiced using the examples given on W3Schools website. A timer function was then created to display the clock, and to also keep track of the time the user had left in each round of the game. My greatest challenge was when to start the countdown. Starting the countdown when the user made their first guess wasn’t ideal, because every time a guess was made the setInterval would be called before the previous call was cleared. Leading to the countdown moving faster than was intended. The timer function was then moved so it would start after the clue Sequence was played. Overall, I learned the importance of how being able to learn on the job is. Using resources available through the internet I was able to understand most of the JavaScript code that was used in this project.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[One of the questions I have is how a game like this game would be permanently hosted on the internet for others to play. I am wondering how a game like this is turned into an app. What would be the next steps into turning this game into a mobile app. How would the code differ when this is being coded to be used on smaller screen. ]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[I would spend the additional hours adding more features. One feature I did add is asking the player how many rounds they would like to play. I made this feature as a JavaScript prompt, but I would improve it by adding it as a JavaScript form instead to make the page more visually appealing. How many rounds the player chooses to play would also affect the time on the countdown clock, with more rounds increasing the time on the clock. Another feature I would add is whether the player would like three strikes or just one mistake allowed.]



## Interview Recording URL Link

[My 5-minute Interview Recording](https://youtu.be/H7r25IohN5I)


## License

    Copyright Maltiti Tahiru

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.