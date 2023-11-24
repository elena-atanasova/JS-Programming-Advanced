function solve(matrix) {
    let equalPairs = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length - 1; j++) {
            if (matrix[i][j] === matrix[i][j + 1]) {
                equalPairs++;
            }
        }
    }

    for (let i = 0; i < matrix.length - 1; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === matrix[i + 1][j]) {
                equalPairs++;
            }
        }
    }
    console.log(equalPairs);
}

solve([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]);

solve([['test', 'yes', 'yo', 'ho'], 
['well', 'done', 'yo', '6'], 
['not', 'done', 'yet', '5']]);



// Second Solution
function countEqualNeighbours(matrix) {
    let count = 0;
    //rows
    for (let row = 0; row < matrix.length; row++) {
        // columns
        for (let col = 0; col < matrix[row].length; col++) {
            if (row < matrix.length - 1) {
                if (matrix[row][col] === matrix[row + 1][col]) {
                    count++;
                }
            }
            if (matrix[row][col] === matrix[row][col + 1]) {
                count++;
            }
        }
    }
    console.log(count);
}


// Third Solution
function solve(matrix) {
    const result = matrix.reduce((acc, currRow, rowIndex) => {
        // return currenCount also possible
        const currentCount = currRow.reduce((acc, currItem, itemIndex) => {
            if (currItem === currRow[itemIndex + 1]) {
                acc += 1;
            }
            // if matrix[rowIndex + 1] is undefined return empty array
            // will throw TypeError if attempting to take element from undefined
            if (currItem === (matrix[rowIndex + 1] || [])[itemIndex]) {
                acc += 1;
            }
            return acc;
        }, 0);
        // console.log(count);
        return acc + currentCount;
    }, 0);

    console.log(result);
}