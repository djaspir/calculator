const number = document.querySelectorAll("[data-number]")
const operator = document.querySelectorAll("[data-operator]")
const screenBottom = document.getElementById("screen-bottom")

// Num Click Handler
const handleNumClick = (e) => {
    displayBottom(e.target.textContent)
}

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

// Display Function
const displayBottom = num => {
    screenBottom.textContent += num;
    if (screenBottom.textContent.indexOf(0) === 0) {
        return screenBottom.textContent = screenBottom.textContent
            .split("").slice(1).join("");
    }
}


// Add event listener to number element
number.forEach(elem => elem.addEventListener("click", handleNumClick))

