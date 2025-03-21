let resultField = document.getElementById('result');
let buttons = document.querySelectorAll('.btn');
let currentInput = '';
let operator = '';
let firstNumber = '';

buttons.forEach(button => {
    button.addEventListener('click', function() {
        let value = this.getAttribute('data-value');
        if (value === 'C') {
            currentInput = '';
            firstNumber = '';
            operator = '';
            resultField.value = '';
        } else if (value === '=') {
            let secondNumber = currentInput;
            if (operator && firstNumber) {
                switch (operator) {
                    case '+':
                        currentInput = (parseFloat(firstNumber) + parseFloat(secondNumber)).toString();
                        break;
                    case '-':
                        currentInput = (parseFloat(firstNumber) - parseFloat(secondNumber)).toString();
                        break;
                    case '*':
                        currentInput = (parseFloat(firstNumber) * parseFloat(secondNumber)).toString();
                        break;
                    case '/':
                        currentInput = (parseFloat(firstNumber) / parseFloat(secondNumber)).toString();
                        break;
                }
            }
            resultField.value = currentInput;
            operator = '';
            firstNumber = '';
        } else if (['+', '-', '*', '/'].includes(value)) {
            firstNumber = currentInput;
            operator = value;
            currentInput = '';
        } else {
            currentInput += value;
            resultField.value = currentInput;
        }
    });
});
