function sum(arr) {
    let firstNumber = arr.shift();

    // if arr.length = 1, arr.pop() returns 'undefined' and there will be an error when calculating the sum below
    // to prevent that we use '|| firstNumber' -> returns that value instead of undefined
    let lastNumber = arr.pop() || firstNumber;

    firstNumber = Number(firstNumber);
    lastNumber = Number(lastNumber);

    let sum = firstNumber + lastNumber;
    return sum;
}

sum(['1', '4', '6', '8']);