function aggregate(arr) {
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    let inverseSum = arr.map(x => 1 / x).reduce((acc, curr) => acc + curr, 0);
    let str = arr.join('');

    console.log(sum);
    console.log(inverseSum);
    console.log(str);
}

aggregate([1, 2, 3]);