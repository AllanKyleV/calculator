// Selecting Variables

// Display
const display = document.querySelector('#calc-display');
// Calculator buttons
const calcButtons = Array.from(document.querySelectorAll('.calc-btn'));
// Numbers
const numbers = Array.from(document.querySelectorAll('.numbers'));
// Operations
const operations = Array.from(document.querySelectorAll('.operations'));


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
function populate(numbers, opeartions) {
    numbers.forEach(button => {
        button.addEventListener('click', () => {
            
            // Populate the display with numbers not repeated zeros
            if (display.value === '0') {
                display.value = button.textContent;
                
            } else {
                display.value += button.textContent;

                // Number first not operations
                if (display.value !== '0') {
                    opeartions.forEach(opBtn => {
                        opBtn.addEventListener('click', () => {
                            display.value += opBtn.textContent;
                        });
                    });
                };
            };
        });
    });
}

populate(numbers, operations);

// Logic: Get the first number, if an operation is clicked that number becames value of a. get the second number, if eaqual is hit b equals to that number, then return a operation b. If another operation is hit, a = a opeartion b.

// Pseudocode:
// Start, Function to operate(firstNum, operation, secondNum)
// Use switch, case opration is add