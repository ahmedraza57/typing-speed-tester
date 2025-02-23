import {custom, phrases} from './data/data.js';
import { userTextArr, accuracyCharArr, userInputText, userAccuracy, wpmCalaulation, accuracyCalculation } from './module/module.js';

const timer = document.getElementById('timer');
const displayText = document.getElementById('display-text');
const textarea = document.getElementById('textarea');
const wpm = document.getElementById('wpm');
const acuracy = document.getElementById('acuracy')
const timeTaken = document.getElementById('total-time-taken');
const resetButton = document.getElementById('reset-button');


let interval;
let countTime = 0;

const displayTextWords = custom.join('').split(' ');
const displayTextLetters = custom.join('').split('');

displayText.textContent = `${custom}.`;
textarea.setAttribute('maxlength', displayTextLetters.length)


// here we talk about the time
function StartTime () {
    interval = setInterval(() => {
        countTime += 1;
    }, 1000)
}
function stopTime() {
    clearInterval(interval)
    console.log(countTime);
    countTime = 0;
}

function conditionalTime () {
    StartTime();
    textarea.removeEventListener('keydown', conditionalTime);
}

function reset() {
    stopTime();
    countTime = 0;
    // userTextArr = [];
    accuracyCharArr = [];
    textarea.value = '';
    wpm.textContent = '';
    acuracy.textContent = '';
    timeTaken.textContent = ''
}
    
// event listeners
textarea.addEventListener('keydown', conditionalTime)
textarea.addEventListener('keydown', (event) => {
    userInputText(event);
    userAccuracy(event)
    // console.log(userText);
    if(textarea.value.length == displayTextLetters.length){
        wpm.textContent = wpmCalaulation(displayTextWords.length, countTime)
        acuracy.textContent = accuracyCalculation(displayTextLetters.length, accuracyCharArr.length)
        timeTaken.textContent = countTime;
        textarea.value = '';
        stopTime();
    }
})
resetButton.addEventListener('click', reset)
document.addEventListener('keydown', (e) => {
    if(e.key == "Control" && e.key == "r"){
        reset()
    }
})