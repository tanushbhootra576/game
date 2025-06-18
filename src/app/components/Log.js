'use client';

export default function Log({ turns, players }) {
    return (
        <ul id="log">
            {turns.slice().reverse().map((t, i) => (
                <li key={i}>
                    {players[t.player]} ▶ {(t.index % 3) + 1}, {Math.floor(t.index / 3) + 1}
                </li>
            ))}
        </ul>
    );
}
