'use client';

export default function WinnerModal({ winnerName, onRestart }) {
    return (
        <div id="game-over">
            <h2>{winnerName === 'Draw' ? "It's a Draw!" : `${winnerName} Wins!`}</h2>
            <p>{winnerName === 'Draw' ? "Try again!" : "Congratulations!"}</p>
            <button onClick={onRestart}>Play Again</button>
        </div>
    );
}
