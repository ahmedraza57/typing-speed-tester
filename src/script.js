import {phrases} from './data/data.js'

const time = document.getElementById('Time');
const displayText = document.getElementById('display-text');
const textarea = document.getElementById('textarea');
const wpm = document.getElementById('wpm');
const accuracy = document.getElementById('accuracy')
// const testingButton = document.getElementById('testing');
const resetButton = document.getElementById('reset-button');

displayText.textContent = phrases[0];

// work with timing only.
let count = 59;
let Id;
function starttTiming(){
    Id = setInterval(() => {
    count -= 1;
    time.textContent = count;
    }, 1000)
}
function clearTiming(){
    clearInterval(Id);
    count = 59;
    time.textContent = count;
}

// here we can start working on the keydown event
let userText = [];
let ConvertUT = [];
let ConvertDT = [];
function userInputText(val){
    if(val.key == "Backspace"){
        userText.pop(-1);
    } else if (val.key == "Shift" || val.key == "Control" || val.key == "Alt" || val.key == "Tab" || val.key == "Capslock" || val.key == "Enter"){
        userText.push('');
    } else{
        userText.push(val.key)
    }
}

// setting timing
function setTimer() {
    starttTiming();
    setTimeout(() => {
        stop();
    }, 60 * 1000)
    textarea.removeEventListener('keydown', setTimer)
}

function stop() {
    clearTiming();
    userText = []
    count = 59;
    textarea.value = "";
}

function checkingLetters(arr){
    return arr.join('').split('');
}

let i = 0;
// here event listeners starts
textarea.addEventListener('keydown', setTimer)
textarea.addEventListener('keydown', (event) => {
    userInputText(event);
    ConvertUT = checkingLetters(userText);
    ConvertDT = checkingLetters(phrases[0]);
        if(ConvertUT[i] == ConvertDT[i]){
            console.log("YEs");
            console.log(ConvertUT[i], ConvertDT[i])
            textarea.style.color = 'white';
            i++;
        } else{
            textarea.style.color = 'red';
            console.log("no");
            console.log(ConvertUT[i], ConvertDT[i]);    
        } 

})


resetButton.addEventListener('click', stop)
