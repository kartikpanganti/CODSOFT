let display = document.getElementById('display');
let previousDisplay = document.getElementById('previous-display');
let historyDisplay = document.getElementById('history-display');
let currentInput = '';
let operator = '';
let previousInput = '';
let history = '';

function appendNumber(number) {
    if (number === '.' && currentInput.includes('.')) return;
    currentInput += number;
    display.innerText = currentInput;
}

function chooseOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
    previousDisplay.innerText = `${previousInput} ${operator}`;
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    updateHistory(`${prev} ${operator} ${current} = ${result}`);
    currentInput = result;
    operator = '';
    previousInput = '';
    display.innerText = result;
    previousDisplay.innerText = '';
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    previousInput = '';
    display.innerText = '';
    previousDisplay.innerText = '';
}

function deleteNumber() {
    currentInput = currentInput.toString().slice(0, -1);
    display.innerText = currentInput;
}

function updateHistory(entry) {
    history += entry + '<br>';
    historyDisplay.innerHTML = history;
}

function clearHistory() {
    history = '';
    historyDisplay.innerHTML = '';
}
