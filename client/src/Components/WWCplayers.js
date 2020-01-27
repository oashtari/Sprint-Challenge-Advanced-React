import React, { useState, useEffect } from 'react';
import { useLocalStorage } from '../Hooks/useLocalStorage';
import { Button } from 'reactstrap';

export const WWCPlayers = (props) => {
    console.log('test props', props.players)

    const [storedPlayers, setStoredPlayers] = useLocalStorage('players', []);

    useEffect(() => {
        setStoredPlayers(props.players)
    }, [props])

    const printPlayers = e => {
        console.log(storedPlayers);
    }
    return (
        <div className="players">
            <Button color='danger' onClick={printPlayers}>Store Players</Button>

        </div>
    );
}

export default WWCPlayers;
