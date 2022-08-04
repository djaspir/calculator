const keys = document.getElementById("calculator-keys")
const displayBottom = document.getElementById("screen-bottom")
const displayTop = document.getElementById("screen-top")

// Num Click Handler
const handleKeys = (e) => {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const screenBottom = displayBottom.textContent
        const previousKeyType = keys.dataset.previousKeyType

        if (!action) {
            if (screenBottom === "0" || previousKeyType === 'operator') {
                displayBottom.textContent = keyContent;
                keys.dataset.previousKey = 'number'
                delete keys.dataset.previousKeyType;
            } else {
                displayBottom.textContent = screenBottom + keyContent
            }
        }

        if (action === 'decimal') {
            if (keys.dataset.previousKeyType === 'operator') {
                console.log("yes")
                displayBottom.textContent = '0.'
            } else if (!screenBottom.includes('.')) {
                displayBottom.textContent = screenBottom + '.'
                console.log("no")
            }
            keys.dataset.previousKeyType = 'decimal'
        }

        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            const firstValue = displayBottom.dataset.firstValue
            const operator = displayBottom.dataset.operator
            const secondValue = screenBottom
            const symbol = e.target.textContent

            displayTop.textContent = `${screenBottom} ${e.target.textContent}`;

            // Note: It's sufficient to check for firstValue and operator because secondValue always exists
            if (firstValue && operator) {
                displayBottom.textContent = operate(operator, firstValue, secondValue)
                displayTop.textContent = `${displayBottom.textContent} ${symbol}`;
            }
            // Add custom attribute
            keys.dataset.previousKeyType = 'operator';
            displayBottom.dataset.firstValue = screenBottom
            displayBottom.dataset.operator = action

        }



        if (action === 'calculate') {
            const firstValue = displayBottom.dataset.firstValue
            const operator = displayBottom.dataset.operator
            const secondValue = screenBottom

            if (firstValue && operator && previousKeyType !== 'operator') {
                displayBottom.textContent = operate(operator, firstValue, secondValue);
            }

            keys.dataset.previousKeyType = 'calculate'
        }
        if (action === 'clear') {
            keys.dataset.previousKeyType = 'clear'
        }
    }
}


// 4 Basic Calculator Function
const add = (num1, num2) => parseFloat(num1) + parseFloat(num2);
const subtract = (num1, num2) => parseFloat(num1) - parseFloat(num2);;
const multiply = (num1, num2) => parseFloat(num1) * parseFloat(num2);;
const divide = (num1, num2) => parseFloat(num1) / parseFloat(num2);;

// Operate Function
const operate = (operator, num1, num2) => {
    return (operator === "add") ? add(num1, num2)
        : (operator === "subtract") ? subtract(num1, num2)
            : (operator === "multiply") ? multiply(num1, num2)
                : divide(num1, num2)
}




// Add event listener to number element
keys.addEventListener("click", handleKeys)

