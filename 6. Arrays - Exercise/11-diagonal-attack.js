function attack(arr) {
    // convert input to matrix
    let matrix = [];
    for (let el of arr) {
        let row = el.split(' ').map(Number);
        matrix.push(row);
    }

    // find sum of the diagonals
    let leftSum = 0;
    let rightSum = 0;
    for (let i = 0; i < matrix.length; i++) {
        leftSum += matrix[i][i];
        rightSum += matrix[i][matrix[i].length - 1 - i];
    }

    if (leftSum != rightSum) {
        matrix.forEach(row => console.log(row.join(' ')));
    } else {
        setSum(matrix).forEach(row => console.log(row.join(' ')));
    }

    function setSum(matrix) {
        let start = 0;
        let end = matrix[0].length - 1;

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (j != start && j != end) {
                    matrix[i][j] = leftSum;
                }
            }
            start++;
            end--;
        }
        return matrix;
    }
}

attack(['5 3 12 3 1',
        '11 4 23 2 5',
        '101 12 3 21 10',
        '1 4 5 2 2',
        '5 22 33 11 1']);

//attack(['1 1 1', '1 1 1', '1 1 0']);