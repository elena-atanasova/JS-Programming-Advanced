function solve(matrix) {
    let max = Math.max(...matrix[0]);
    matrix.forEach(row => {
        let currMax = Math.max(...row);
        max = currMax > max ? currMax : max;
    });

    return max;
}

solve([[20, 50, 10],
[8, 33, 145]]);