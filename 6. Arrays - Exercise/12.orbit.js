function orbit(arr) {
    let [row, column, starRow, starCol] = arr;
    let orbitMatrix = [];

    for (let i = 0; i < row; i++) {
        orbitMatrix.push([]);
    }

    for (let rows = 0; rows < row; rows++) {
        for (let columns = 0; columns < column; columns++) {
            orbitMatrix[rows][columns] =
                Math.max(Math.abs(rows - starRow),
                    Math.abs(columns - starCol)) + 1
        }
    }

    console.log(orbitMatrix.map(rows => rows.join(" ")).join("\n"));
}

orbit([4, 4, 0, 0]);