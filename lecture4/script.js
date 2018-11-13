var oneBtn = document.getElementById("calc-one");
var twoBtn = document.getElementById("calc-two");
var threeBtn = document.getElementById("calc-three");
var fourBtn = document.getElementById("calc-four");
var fiveBtn = document.getElementById("calc-five");
var sixBtn = document.getElementById("calc-six");
var sevenBtn = document.getElementById("calc-seven");
var eightBtn = document.getElementById("calc-eight");
var nineBtn = document.getElementById("calc-nine");
var zeroBtn = document.getElementById("calc-zero");
var decimalBtn = document.getElementById("calc-decimal");
var clearBtn = document.getElementById("calc-clear");
var backspaceBtn = document.getElementById("calc-backspace");
var displayValElement = document.getElementById("calc-display-val");
var calcNumBtns = document.getElementsByClassName("calc-btn-num");
var calcOperatorBtns = document.getElementsByClassName("calc-btn-operator");
var historyBox = document.getElementById("history-box");
var displayVal = "0";
var pendingVal;
var evalStringArray = [];
var historyStringArray = '';


var updateDisplayVal = (clickObj) => {
    var btnText = +clickObj.target.innerText;

    if (displayVal === "0"){
        displayVal = '';
    }

    displayVal += btnText;
    displayValElement.innerText = displayVal;
    
    historyStringArray += btnText;
    
}

var perfomOperation = (clickObj) => {
    var operator = clickObj.target.innerText;

    switch (operator) {
        case '+':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('+');
            historyStringArray += ' + ';
            break;
        case '-':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('-');
            historyStringArray += ' - ';
            break;
        case 'x':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('*');
            historyStringArray += ' x ';
            break;
        case '÷':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('/');
            historyStringArray += ' ÷ ';
            break;
        case '=':
            evalStringArray.push(displayVal);
            var evaluation = eval(evalStringArray.join(' '));  
            displayVal = evaluation + ''; 
            displayValElement.innerText = displayVal;
            evalStringArray = [];
            historyStringArray += ' = ' + evaluation;
            historyBox.innerHTML += historyStringArray + '<br>';
            historyStringArray = '' + evaluation;
            
            break;   

    }
}

for (let i = 0; i < calcNumBtns.length; i++) {
    calcNumBtns[i].addEventListener("click", updateDisplayVal, false);
}

for (let i = 0; i < calcOperatorBtns.length; i++) {
    calcOperatorBtns[i].addEventListener("click", perfomOperation, false);
}

clearBtn.onclick = () => {
    displayVal = "0";
    pendingVal = undefined;
    evalStringArray = [];
    displayValElement.innerHTML = displayVal;
    historyStringArray = '';
}

backspaceBtn.onclick = () => {
    let lengthOfDisplayVal = displayVal.length;
    displayVal = displayVal.slice(0, lengthOfDisplayVal - 1);
    displayValElement.innerText = displayVal;
    historyStringArray = historyStringArray.substr(0, historyStringArray.length - 1);
}

decimalBtn.onclick = () => {
    if (!displayVal.includes(".")){
        displayVal += ".";
    }
    displayValElement.innerText = displayVal;
    historyStringArray += '.';
}