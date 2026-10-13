// Selecting Elements.

// Display.
const display = document.querySelector("#calc-display");
// All buttons.
const buttons = document.querySelectorAll(".calc-btn");
// All numbers buttons.
const numberButtons = document.querySelectorAll(".numbers");
// All operation buttons.
const operationButtons = document.querySelectorAll(".operations");
// Equals.
const clearButton = document.querySelector("#clear");
// Decimals.
const decimal = document.querySelector("#decimal");

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

// Update the dispaly by number buttons.    
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        
        // No zero's at first.
        if (display.value === "0") {
            display.value = button.textContent;
        } else {
            display.value += button.textContent;
        }
    });
});

// Clear button.
clearButton.addEventListener("click", () => {
    display.value = "0";
});

// Decimal points.
decimal.addEventListener("click", () => {
    if (!display.value.includes(".")) {
        display.value += ".";
    }
});

// Operations
operationButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (display.value === "0") {
            display.value = "0";
        } else {
            display.value += button.textContent;
        }
    });
});