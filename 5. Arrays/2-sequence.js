function solve(n, k) {
    let arr = [1];

    for (let i = 0; i < n; i++) {
        let sum = 0;
        if (arr.length <= k) {  // not enough elements, so no need to slice, we can directly calculate their sum
            sum = arr.reduce((acc, curr) => acc + curr, 0);
        } else {
            let temp = arr.slice(i - (k - 1), i + 1);   // take only the k-number of elements
            sum = temp.reduce((acc, curr) => acc + curr, 0);    // calculate only their sum
        }

        if (arr.length >= n) {
            break;
        }
        arr.push(sum);
    }

    return arr;
}

solve(6, 3);
solve(8, 2);