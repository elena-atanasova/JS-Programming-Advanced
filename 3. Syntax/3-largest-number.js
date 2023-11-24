function printLargestNum(num1, num2, num3) {
    let max = Math.max(num1, num2, num3);
    console.log(`The largest number is ${max}.`);
}

printLargestNum(5, -3, 16);



function secondSolution(...params) { 
    console.log(`The largest number is ${Math.max(...params)}.`);
}

secondSolution(5, -3, 16);