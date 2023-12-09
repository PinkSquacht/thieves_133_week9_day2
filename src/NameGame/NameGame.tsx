import React, { useState } from 'react';

const Component = () => {
    const [game, setGame] = useState({
        id: 1,
        player: {
            name: "Dylan"
        }
    });

    const [newName, setNewName] = useState('');

    const handleClick = () => {
        setGame(prevGame => ({
            ...prevGame,
            player: {
                ...prevGame.player,
                name: newName
            }
        }));
    };

    const handleInputChange = (event) => {
        setNewName(event.target.value);
    };

    return (
        <div>
            <p>Player Name: {game.player.name}</p>
            <input type="text" value={newName} onChange={handleInputChange} placeholder="Enter new name" />
            <button onClick={handleClick}>Change Player Name</button>
        </div>
    );
};

export default Component;