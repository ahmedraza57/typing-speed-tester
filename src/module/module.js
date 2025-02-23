let userTextArr = [];
let accuracyCharArr = [];

function userInputText(val){
    if(val.key == "Backspace"){
        userTextArr.pop(-1);
    } else if (val.key == "Shift" || val.key == "Control" || val.key == "Alt" || val.key == "Tab" || val.key == "Capslock" || val.key == "Enter"){
        userTextArr.push('');
    } else{
        userTextArr.push(val.key)
    }
}

function userAccuracy(val){
    if (val.key == "Shift" || val.key == "Control" || val.key == "Alt" || val.key == "Tab" || val.key == "Capslock" || val.key == "Enter"){
        return;
    } else {
        accuracyCharArr.push(val.key)
    }
}

// formula for the calculation
function wpmCalaulation(words, time){
    return (words * 60) / time;
}

function accuracyCalculation(letters, totalTypedletter){
    return (letters / totalTypedletter) * 100;
}

export {
    userTextArr,
    accuracyCharArr,
    userInputText,
    userAccuracy,
    wpmCalaulation,
    accuracyCalculation
}