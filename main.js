// get the calculator keys inside the grid container
const keys = document.getElementById("calculator-keys")

// event delegation pattern to listen to all the childen of the calculator-keys parent
keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        // Use data-action attribute to determine the type of key that is clicked
        const key = e.target
        const action = key.dataset.action
        // If the key does not have a data-action attribute, it must e a number key
        if (!action) {
            console.log('number key!')
        }
        // if key has data-action with the operator keys
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            console.log('operator key!')
        }
        // if key is decimal, clear, delete, and calculate keys
        if (action === 'decimal') {
            console.log('decimal key!')
        }

        if (action === 'clear') {
            console.log('clear key!')
        }

        if (action === 'delete') {
            console.log('delete key!')
        }

        if (action === 'calculate') {
            console.log('equal key!')
        }
    }
})

