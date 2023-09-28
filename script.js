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

    return firstNumber;
}

function setOperator() {

    const clickedOperator = document.querySelectorAll('.operator .btn');

    let result;

    for (let el of clickedOperator) {
        el.addEventListener('click', () => {

            let theOperator = el.textContent;

            if (firstNumber === undefined) {
                setFirstNumber();
                displayedNumbers = [];
            } else if (secondNumber === undefined) {
                secondNumber = setSecondNumber();

                result = operate(firstNumber, operator, secondNumber);
                display.textContent = result;
            }

            if (theOperator !== '=' && secondNumber !== undefined) {
                firstNumber = result;
                console.log(`result = ${result}`)
                console.log(`firstNumber = ${firstNumber}`)

                secondNumber = undefined;
                result = undefined;
                console.log(`secondNumber = ${secondNumber}`)
                console.log(`new result = ${result}`)

                displayedNumbers = [result];
                console.log(`displayedNumbers = ${displayedNumbers}`)
            }
            if (theOperator !== '=') {
                operator = theOperator;
            } else {
                clearVar();
            }
        });
    }
}

function setSecondNumber() {

    secondNumber = Number(displayedNumbers.join(''));

    return secondNumber;
}

function clearing() {

    clearVar();
    display.textContent = 0;
}

function clearVar() {

    firstNumber = undefined;
    operator = undefined;
    secondNumber = undefined;
    displayedNumbers = [];
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