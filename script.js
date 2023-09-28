const display = document.querySelector('.display');
const clear = document.querySelector('.clear');

let displayedNumbers = [];

runCalculator();

let firstNumber;
let operator;
let secondNumber;

function runCalculator() {
    displayNumbers();
    setOperator();

    clear.addEventListener('click', () => clearing());
}

function setFirstNumber() {

    firstNumber = Number(displayedNumbers.join(''));
    console.log(`firstNumber = ${firstNumber}`)

    return firstNumber;
}

function setOperator() {

    const clickedOperator = document.querySelectorAll('.operator .btn');

    for (let el of clickedOperator) {
        el.addEventListener('click', () => {

            let theOperator = el.textContent;

            if (firstNumber === undefined) {
                setFirstNumber();
                displayedNumbers = [];
            } else if (secondNumber === undefined) {
                secondNumber = setSecondNumber();
                console.log(`secondNumber = ${secondNumber}`);

                let result = operate(firstNumber, operator, secondNumber);
                display.textContent = result;
            }

            operator = theOperator;

            console.log(`operator : ${operator}`)
        });
    }
}

function setSecondNumber() {

    secondNumber = displayedNumbers;
}

function clearing() {

    firstNumber = undefined;
    operator = undefined;
    secondNumber = undefined;
    displayedNumbers = [];

    display.textContent = 0;
}

function displayNumbers () {

    const clickedNumber = document.querySelectorAll('.numbers .row .btn');

    for (let i = 0; i < clickedNumber.length; i++) {
        clickedNumber[i].addEventListener('click', () => {

            let theNumber = clickedNumber[i].textContent;
            displayedNumbers.push(theNumber);

            display.textContent = displayedNumbers.join('');
        });
    }
}

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