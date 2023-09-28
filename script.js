const display = document.querySelector('.display');
let displayedNumbers = [];

displayNumbers();

function displayNumbers () {

    const clickedNumber = document.querySelectorAll('.numbers .row .btn');

    for (let i = 0; i < clickedNumber.length; i++) {
        clickedNumber[i].addEventListener('click', () => {

            let theNumber = clickedNumber[i].textContent;
            displayedNumbers.push(theNumber);

            console.log(theNumber);
            display.textContent = displayedNumbers.join('');
        });
    }
}

let firstNumber = 0;
let operator = ['+', '-', '*', '/'];
let secondNumber = 0;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(firstNumber, operator, secondNumber) {
    switch (operator) {
        case '+':
            return add(firstNumber, secondNumber);
        case '-':
            return subtract(firstNumber, secondNumber);
        case '*':
            return multiply(firstNumber, secondNumber);
        case '/':
            return divide(firstNumber, secondNumber);
        default:
            break;
    }
}