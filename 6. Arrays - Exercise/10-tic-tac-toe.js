function solve(moves) {
    let board = [[false, false, false],
    [false, false, false],
    [false, false, false]];

    let firstPlayer = 'X';
    let secondPlayer = 'O';
    for (let i = 0; i < moves.length; i++) {
        let [x, y] = moves[i].split(' ');
        x = Number(x);
        y = Number(y);

        let mark = i % 2 == 0 ? firstPlayer : secondPlayer;
        if (board[x][y] != false) {
            console.log('This place is already taken. Please choose another!');
            let temp = firstPlayer;
            firstPlayer = secondPlayer;
            secondPlayer = temp;
            continue;
        }
        board[x][y] = mark;
        // check if anyone has won; if yes, stop the game
        if (win(board) === true) {
            console.log(`Player ${mark} wins!`);
            board.forEach(row => {
                console.log(row.join('\t'));
            });
            break;
        }

        // the board is full
        if (i === 8) {
            break;
        }
    }

    if (win(board) === false) {
        console.log('The game ended! Nobody wins :(');
        board.forEach(row => {
            console.log(row.join('\t'));
        });
    }

    function win(matrix) {
        for (let row of matrix) {
            if (row.join('') === 'XXX' || row.join('') === 'OOO') {
                return true;
            }
        }

        for (let row = 0; row < matrix.length; row++) {
            let colSum = '';
            let leftDiagonal = '';
            let rightDiagonal = '';
            for (let col = 0; col < matrix.length; col++) {
                colSum += matrix[col][row];
                leftDiagonal += matrix[col][col];
                rightDiagonal += matrix[col][matrix.length - 1 - col];
            }

            if (colSum === 'XXX' || colSum === 'OOO' || leftDiagonal === 'XXX' || leftDiagonal === 'OOO' || rightDiagonal === 'XXX' || rightDiagonal === 'OOO') {
                return true;
            }
        }

        return false;
    }
}


// solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);
// solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]);
// solve(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]);
// solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);
solve(['0 1', '0 0', '0 2', '2 0', '1 0', '1 2', '1 1', '2 1', '2 2', '0 0']);