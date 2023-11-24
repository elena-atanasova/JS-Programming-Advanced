function calculateSum(n, m) {
    n = Number(n);
    m = Number(m);

    let sum = 0;
    for (let i = n; i <= m; i++) {
        sum += i;
    }

    return sum;
}

let result = calculateSum('1', '5');
console.log(result);