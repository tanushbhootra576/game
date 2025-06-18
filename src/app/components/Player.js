'use client';
import { useState, useEffect } from 'react';

export default function Player({ symbol, name, isActive, onNameChange }) {
    const [edit, setEdit] = useState(false);
    const [val, setVal] = useState(name);
    useEffect(() => setVal(name), [name]);
    const save = () => { onNameChange(val); setEdit(false); };

    return (
        <li className={isActive ? 'active player' : 'player'}>
            {edit ? (
                <input type="text" value={val} onChange={e => setVal(e.target.value)} />
            ) : (
                <span className="player-name">{name}</span>
            )}
            <span className="player-symbol">{symbol}</span>
            <button onClick={() => edit ? save() : setEdit(true)}>
                {edit ? '✔' : 'Edit'}
            </button>
        </li>
    );
}
