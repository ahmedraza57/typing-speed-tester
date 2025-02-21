import {phrases} from './data/data.js'

const displayText = document.getElementById('display-text');
const textarea = document.getElementById('textarea');
const time = document.getElementById('Time');
const testingButton = document.getElementById('testing');
const resetButton = document.getElementById('reset-button');

displayText.textContent = phrases[0];

// work with timing only.
let count = 60;
let Id;
function starttTiming(){
    Id = setInterval(() => {
    count -= 1;
    time.textContent = count;
    }, 1000)
}
function clearTiming(){
    clearInterval(Id);
    count = 60;
    time.textContent = count;
}

// here we can start working on the keydown event
let userText = [];
function userInputText(val){
    if(val.key == "Backspace"){
        userText.pop(-1);
    } else if (val.key == "Shift" || val.key == "Control" || val.key == "Alt" || val.key == "Tab" || val.key == "Capslock" || val.key == "Enter"){
        userText.push('');
    } else{
        userText.push(val.key)
    }
}

// settinf timing
function setting() {
    starttTiming();
    setTimeout(() => {
        clearTiming()
    }, 60 * 1000)
    textarea.removeEventListener('keydown', setting)
}

// here event listeners starts
textarea.addEventListener('keydown', setting)
textarea.addEventListener('keydown', () => {
    console.log("this is the second event which is fire");
    
})
resetButton.addEventListener('click', () => {
    clearTiming();
    textarea.textContent = "";
    count = 0;
    userText = [];
    console.log("reset Button is fired", count, userText);
    
})