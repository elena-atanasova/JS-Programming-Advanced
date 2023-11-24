function spiral(row, col) {
    let spiralMatrix = [];
    for (let i = 0; i < row; i++) {
        spiralMatrix.push([]);
    }

    let counter = 1;
    
    let startCol = 0;
    let endCol = col - 1;
    
    let startRow = 0;
    let endRow = row - 1;

    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            spiralMatrix[startRow][i] = counter;
            counter++;
        }

        startRow++;

        for (let i = startRow; i <= endRow; i++) {
            spiralMatrix[i][endCol] = counter;
            counter++;
        }

        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            spiralMatrix[endRow][i] = counter;
            counter++;
        }

        endRow--;

        for (let i = endRow; i >= startRow; i--) {
            spiralMatrix[i][startCol] = counter;
            counter++;
        }

        startCol++;
    }

    spiralMatrix.forEach(row => console.log(row.join(' ')));
}

spiral(5, 5);