function subtract() {
    let firstNumberElement = document.getElementById('firstNumber').value;
    let secondNumberElement = document.getElementById('secondNumber').value;

    let result = Number(firstNumberElement) - Number(secondNumberElement);
    let resultElement = document.getElementById('result');
    resultElement.textContent = result;
}