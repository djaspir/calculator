const calculator = document.getElementById("calculator")
const displayTwo = calculator.querySelector("#display-two")
const display = calculator.querySelector("#display-one")
const keys = calculator.querySelector("#keys")

// 4 basic math functions parseFloat the string
const add = (number1, number2) => parseFloat(number1) + parseFloat(number2);
const subtract = (number1, number2) => parseFloat(number1) - parseFloat(number2);
const multiply = (number1, number2) => parseFloat(number1) * parseFloat(number2);
const divide = (number1, number2) => parseFloat(number1) / parseFloat(number2);

// Operate math function
const operate = (operator, number1, number2) => {
    return (operator === "+") ? add(number1, number2)
        : (operator === "-") ? subtract(number1, number2)
            : (operator === "×") ? multiply(number1, number2)
                : divide(number1, number2)
}


// Handle calculator key press event function
const handleKeyPress = (e) => {
    // Filter out the calculator keys
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const displayedNumber = display.textContent
        const previousKeyType = calculator.dataset.previousKeyType


        // Get number keys
        if (!action) {
            // If number is zero or previousKeyType is operator then replace num
            if (displayedNumber === '0' || previousKeyType === "operator") {
                display.textContent = key.textContent;
                delete calculator.dataset.previousKeyType;
            } else {
                display.textContent += key.textContent;
            }
        }

        // When user presses an operator
        if (action === "+" || action === "-" ||
            action === "×" || action === "÷") {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const finalCalc = calculator.dataset.finalCalc;
            const secondValue = displayedNumber;

            if (firstValue && operator && finalCalc) {
                const secondValue = displayedNumber;
                display.textContent = operate(operator, finalCalc, secondValue)
                displayTwo.textContent = `${display.textContent} ${operator}`
                calculator.dataset.previousKeyType = "operator";
                calculator.dataset.operator = action;

                return calculator.dataset.finalCalc = display.textContent;
            }

            if (firstValue && operator) {
                const secondValue = displayedNumber;
                display.textContent = operate(operator, firstValue, secondValue)
                displayTwo.textContent = `${display.textContent} ${operator}`

                calculator.dataset.previousKeyType = "operator";
                calculator.dataset.operator = action;
                return calculator.dataset.finalCalc = display.textContent;
            }

            // Store the first number in a variable, operator (dataset)
            calculator.dataset.firstValue = displayedNumber;
            calculator.dataset.operator = action;


            // Display the first value and operator on Top display
            displayTwo.textContent = `${displayedNumber} ${action}`;
            // Make Previous key as Operator
            calculator.dataset.previousKeyType = "operator";
        }

        // When user presses equals button
        if (action === "calculate") {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNumber;

            // If firstValue and operator and secondValue is not null
            if (firstValue && operator && secondValue) {
                // Execute operate function and display to the screen one and two
                display.textContent = operate(operator, firstValue, secondValue)
                displayTwo.textContent = `${display.textContent} ${operator}`
            }
        }

        // When user presses delete button
        if (action === "delete") {
            if (displayedNumber.length === 1) {
                display.textContent = "0";
                return
            }
            display.textContent = displayedNumber.slice(0, displayedNumber.length - 1);
        }

        // When user presses clear button
        if (action === "clear") {
            display.textContent = "0";
        }

        // When user presses decimal
        if (action === "decimal") {
            if (display.textContent.includes(".")) return
            if (previousKeyType === 'operator') {
                return display.textContent = "0.";
            }
            display.textContent += "."
        }
    }
}


// Calculator keys event listener function
keys.addEventListener("click", handleKeyPress)