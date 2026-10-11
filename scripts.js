// Elements.

// Display.
const display = document.querySelector("#calc-display");
// All buttons.
const buttons = document.querySelectorAll(".calc-btn");
// All numbers buttons.
const numberButtons = document.querySelectorAll(".numbers");
// All operation buttons.
const operationButtons = document.querySelectorAll(".operations");
// Equals.

// Calculate.
function operate(num1, num2, operation) {
    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            return num1 / num2;
    }
}