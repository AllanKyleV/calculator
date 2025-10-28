// Selecting Variables
// Display
const display = document.querySelector('#calc-display');

// Calculator buttons
const calcButtons = Array.from(document.querySelectorAll('.calc-btn'));


// Function to operate
function operate(firstNum, operation, secondNum) {
    switch (operation) {
        case 'addition':
            return firstNum + secondNum;
        case 'subraction':
            return firstNum - secondNum;
        case 'multiplication':
            return firstNum * secondNum;
        case 'division':
            return firstNum / secondNum;
    };
}

// Function to populate the display with clicked buttons
function populate(calcButtons) {
    calcButtons.forEach(button => {
        button.addEvenListener('click', () => {
            
            // To be continue...
        });
    });
}


// Logic: Get the first number, if an operation is clicked that number becames value of a. get the second number, if eaqual is hit b equals to that number, then return a operation b. If another operation is hit, a = a opeartion b.

// Pseudocode:
// Start, Function to operate(firstNum, operation, secondNum)
// Use switch, case opration is add