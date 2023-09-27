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
            add(firstNumber, secondNumber);
            break;
        case '-':
            subtract(firstNumber, secondNumber);
            break;
        case '*':
            multiply(firstNumber, secondNumber);
            break;
        case '/':
            divide(firstNumber, secondNumber);
            break;
        default:
            break;
    }
}