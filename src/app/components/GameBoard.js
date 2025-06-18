'use client';

export default function GameBoard({ board, onSelect }) {
    return (
        <section id="game-board">
            <ol>
                {board.map((cell, idx) => (
                    <li key={idx}>
                        <button disabled={!!cell} onClick={() => onSelect(idx)}>
                            {cell}
                        </button>
                    </li>
                ))}
            </ol>
        </section>
    );
}
