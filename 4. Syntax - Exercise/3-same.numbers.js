function checkNum(num) {
    let str = String(num)
    let isEqual = str.split('').every(x => x == str[0]);
    let sum = str
        .split('')
        .map(x => Number(x))
        .reduce((acc, curr) => acc + curr, 0);

    console.log(isEqual);
    console.log(sum);
}

checkNum(2222222);