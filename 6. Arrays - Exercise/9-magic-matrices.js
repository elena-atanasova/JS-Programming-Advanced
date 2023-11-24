function solve(matrix) {
    let sum = matrix[0].reduce((a, b) => a + b);
    let isMagical = true;

    for (let i = 0; i < matrix.length; i++) {
        let rowSum = matrix[0].reduce((a, b) => a + b, 0);
        if (rowSum != sum) {
            isMagical = false;
            break;
        }

        let colSum = matrix.reduce((a, b) => a + b[i], 0)
        if (colSum != sum) {
            isMagical = false;
            break;
        }
    }
    return isMagical;
}

solve([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
solve([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
solve([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);