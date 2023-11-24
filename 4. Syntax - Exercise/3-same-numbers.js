function sameNumbers(num) {
    let numbers = num.toString().split('').map(Number);
    let isEqual = true;
    for (let i = 0; i < numbers.length; i++) {
        let curr = numbers[i];
        if (curr !== numbers[0]) {
            isEqual = false;
            break;
        }
    }

    let sum = numbers.reduce((a, b) => a + b, 0);
    console.log(isEqual);
    console.log(sum);
}

sameNumbers(1234);


// Second Solution
function solve(num) {
    let arr = num.toString().split('').map(Number);
    console.log([...new Set(arr)].length === 1);
    console.log(arr.reduce((a, b) => a + b));
}


// Third Solution
function solve(num) {
    let sum = 0;
    let result = true;
    let digit = num % 10;
    while (num !== 0) {
        let currentDigit = num % 10;
        sum += currentDigit;
        if (currentDigit !== digit) {
            result = false;
        }
        num = Math.floor(num / 10);
    }
    console.log(result);
    console.log(sum);
}