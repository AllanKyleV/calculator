// Selecting Elements

// Display
const display = document.querySelector('#display');

// Buttons
const numButtons = document.querySelectorAll('#btn0, #btn1, #btn2, #btn3, #btn4, #btn5, #btn6, #btn7, #btn8, #btn9');

const btnAdd = document.querySelector('#btnAdd');
const btnSubtract = document.querySelector('#btnSubtract');
const btnMultiply = document.querySelector('#btnMultiply');
const btnDivide = document.querySelector('#btnDivide');
const btnEqual = document.querySelector('#btnEqual');
const btnClear = document.querySelector('#btnClear');


function calculate() {
    let textDisplay = '';

    numButtons.forEach(button => {
        button.addEventListener('click', () => {
            textDisplay += button.textContent;
            display.textContent = textDisplay;
        });
    });
}

calculate();