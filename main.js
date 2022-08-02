// 4 Basic Calculator Function
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

// Operate Function
const operate = (operator, num1, num2) => {
    return (operator === "addition") ? add(num1, num2)
        : (operator === "subtraction") ? subtract(num1, num2)
            : (operator === "multiplication") ? multiply(num1, num2)
                : divide(num1, num2)
}