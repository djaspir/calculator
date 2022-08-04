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