function solve(matrix) {
    let leftSum = 0;
    let rightSum = 0;
    for (let i = 0; i < matrix.length; i++) {
        let rightIndex = matrix[0].length - i - 1;
        leftSum += matrix[i][i];
        rightSum += matrix[i][rightIndex]
    }
    let result = leftSum + ' ' + rightSum;
    console.log(result);
}

solve([[20, 40], [10, 60]]);
solve([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);