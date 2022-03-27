// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
//const roundsToPlay = 6; //how many rounds will be played
const countdownSecs = 25; // time the countdownw will reset to

//Global Variables
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var clueHoldTime = 1000; // how long to hold each clue's light/sound
var strikes = 0; // this is how many mistakes the player has made
var secs = countdownSecs; // var to keep track of time
var theTimer; //the setIntervarl var name
var rounds; // user will input how many rounds they want to play

function startGame() {
  //initialize game variables
  rounds = prompt("How many rounds would you like to play? Must be more than 2."); //prompts user for how many rounds they'd like to play
  while (rounds < 2) {
    rounds = prompt("How many rounds would you like to play? Must be more than 2.");
  }
  randomPattern(rounds);
  strikes = 0;
  clueHoldTime = 1000;
  document.getElementById("strikes").innerHTML = "Strike: " + strikes;
  document.getElementById("timer").innerHTML = countdownSecs + " sec";
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("strikes").innerHTML = "Strike: 0";
  clearInterval(theTimer);
  document.getElementById("timer").innerHTML = countdownSecs + " sec";
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 550,
  6: 200,
};

//generates the patttern to be used
function randomPattern(roundsToPlay) {
  for (let i = 0; i < roundsToPlay; i++) {
    pattern[i] = getRandomIntInclusive(1, 6);
    console.log(pattern[i]);
  }
}

//return a random int between specified values ( code from developer.modzilla)
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  context.resume();
  clearInterval(theTimer);
  secs = countdownSecs;
  document.getElementById("timer").innerHTML = secs + " sec";
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  console.log("clue hold time is " + clueHoldTime);
  clueHoldTime -= 50;
  theTimer = setInterval(timer, 1000);
}

function loseGame() {
  stopGame();
  alert("STRIKE 3 \nGame Over. You lost.");
}

function loseGameTimer() {
  stopGame();
  alert("You Ran Out Of Time \nGame Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game over. You won.");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  
  if (pattern[guessCounter] == btn) {
    //Guess was correct!
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        //GAME OVER: WIN!
        winGame();
      } else {
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    } else {
      //so far so good... check the next guess
      guessCounter++;
    }
  } else {
    document.getElementById("strikes").innerHTML = "Strike: " + strikes;
    strikes += 1;
    document.getElementById("strikes").innerHTML = "Strike: " + strikes;
    //console.log("user strike: " + strikes);
    if (strikes == 3) {
      loseGame();
    }
  }
}

function timer(){
  secs--;
  document.getElementById("timer").innerHTML = secs + " sec";
  if (secs == 0) {
    loseGameTimer();
  }
}

function stopCountdown() {
  document.getElementById("timer").innerHTML = countdownSecs + " sec";
  clearInterval(theTimer);
  theTimer = null;
}
