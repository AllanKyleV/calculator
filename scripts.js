// Select variables

// Display screen
const display = document.querySelector('#display');

// Number buttons
const numberButtons = document.querySelectorAll('.number')

// Operators
const operators = Array.from(document.querySelectorAll('#btn-divide, #btn-multiply, #btn-subtract, #btn-add, #btn-decimal, #btn-equals'));

// Functions
function operate(firstNum, operators, secondNum) {
    switch (operators) {
        case 'add':
            return firstNum + secondNum;

        case 'subtract':
            return firstNum - secondNum;

        case 'multiply':
            return firstNum * secondNum;

        case 'divide':
            return firstNum / secondNum;
    };
}

// A function that populate the display when you click the digit buttons.
function populateNumbers(numberButtons) {
    numberButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (display.value === '0' || display.value === '') {
                display.value = btn.textContent;
            } else {
                display.value += btn.textContent;
            }
        });
    });
}

populateNumbers(numberButtons);

// Goal: When button is click, the display is filled with numbers/operators.

// Practice DOM
const title = document.querySelector('h1');
const user = ''

// title.textContent = 'Hello';
// title.textContent = user === '' ? 'Hello Guest' : `Hello ${user}`;
// title.style = 'color: maroon';

// A function that calculates, if number is clicked add the number variable as string, if an operator is clicked, use that operator then proceed to another variabe... This may work, but not the same as regular calculator. The calculator follows the PEMDAS method.

// Let's try another one.