'use client';
import { useState } from 'react';
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import WinnerModal from './components/WinnerModal';

const initialBoard = Array(9).fill(null);

function checkWinner(board) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return board.every(el => el) ? 'Draw' : null;
}

export default function Home() {
  const [players, setPlayers] = useState({ X: 'Player 1', O: 'Player 2' });
  const [active, setActive] = useState('X');
  const [board, setBoard] = useState(initialBoard);
  const [turns, setTurns] = useState([]);
  const [winner, setWinner] = useState(null);

  const handleName = (sym, name) => setPlayers(p => ({ ...p, [sym]: name }));
  const makeMove = i => {
    if (board[i] || winner) return;
    const nb = board.slice(); nb[i] = active;
    setBoard(nb);
    setTurns(t => [...t, { player: active, index: i }]);
    const w = checkWinner(nb);
    if (w) setWinner(w);
    else setActive(a => (a === 'X' ? 'O' : 'X'));
  };
  const restart = () => {
    setBoard(initialBoard);
    setTurns([]);
    setActive('X');
    setWinner(null);
  };

  return (
    <main>
      <header><h1>Tic‑Tac‑Toe</h1></header>
      <div id="game-container">
        <ul id="players" className={winner ? '' : 'highlight-player'}>
          <Player symbol="X" name={players.X} isActive={active === 'X'} onNameChange={n => handleName('X', n)} />
          <Player symbol="O" name={players.O} isActive={active === 'O'} onNameChange={n => handleName('O', n)} />
        </ul>

        <GameBoard board={board} onSelect={makeMove} />

        <Log turns={turns} players={players} />

        {winner && (
          <WinnerModal
            winnerName={winner === 'Draw' ? 'Draw' : players[winner]}
            onRestart={restart}
          />
        )}
      </div>
    </main>
  );
}
