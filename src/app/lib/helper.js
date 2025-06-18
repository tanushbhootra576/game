export function checkWinner(board) {
    for (let row of board) {
        if (row[0] && row.every(cell => cell === row[0])) {
            return row[0];
        }
    }
    for (let col = 0; col < 3; col++) {
        if (
            board[0][col] &&
            board[0][col] === board[1][col] &&
            board[0][col] === board[2][col]
        ) {
            return board[0][col];
        }
    }
    if (
        board[0][0] &&
        board[0][0] === board[1][1] &&
        board[0][0] === board[2][2]
    ) {
        return board[0][0];
    }
    if (
        board[0][2] &&
        board[0][2] === board[1][1] &&
        board[0][2] === board[2][0]
    ) {
        return board[0][2];
    }
    const allFilled = board.every(row => row.every(cell => cell !== null));
    if (allFilled) return "Draw";
    return null;
}
