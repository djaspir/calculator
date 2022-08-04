const calculator = document.getElementById("calculator")
const display = calculator.querySelector("#display-one")
const keys = calculator.querySelector("#keys")

// 4 basic math functions
const add = (number1, number2) => number1 + number2;
const subtract = (number1, number2) => number1 - number2;
const multiply = (number1, number2) => number1 * number2;
const divide = (number1, number2) => number1 / number2;

// Operate math function
const operate = (operator, number1, number2) => {
    return (operator === "add") ? add(number1, number2)
        : (operator === "subtract") ? subtract(number1, number2)
            : (operator === "multiply") ? multiply(number1, number2)
                : divide(number1, number2)
}

const displayNumber = (num) => {
    // Check if the first number is zero then replace it
    if (display.textContent === '0') {
        display.textContent = num;
    } else {
        display.textContent += num;
    }
}

// Handle calculator key press event function
const handleKeyPress = (e) => {
    // Filter out the calculator keys
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const displayedNumber = display.textContent

        // Get number keys
        if (!action) {
            displayNumber(key.textContent)
        }

        // When user presses an operator
        if (action === "+" || action === "-" ||
            action === "&times;" || action === "÷") {
            // Store the first number in a variable
            calculator.dataset.firstValue = displayedNumber;
            calculator.dataset.operator = action;
        }
    }
}


// Calculator keys event listener function
keys.addEventListener("click", handleKeyPress)