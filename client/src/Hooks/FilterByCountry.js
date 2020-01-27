import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import PlayerCard from '../Components/WWCplayersCard';
// import useLocalStorage from './useLocalStorage';


export const FilterPlayers = props => {

    const [US, setUS] = useState([]);
    const [world, setWorld] = useState();

    function filterUSPlayers() {
        const players = Object.values(props);
        console.log(players)
        var US_players = players.filter(function (each) {
            return each.id == 1;
        })
        console.log('test us', US_players);

        // if (player.country === 'United State') {
        //     return player
        // }
        // player.filter(each => {
        //     if (each[1] === 'United States') {
        //         console.log(each);
        // < PlayerCard player={each} />
        // setUS(US = { each });
        // console.log('US', US);
    };



    function filterWorldPlayers() {
        const players = Object.values(props);
        players.map(player => {
            player.filter(each => {
                if (each[1] !== 'United States') {
                    // console.log(each)
                };
            })
        })
    }


    useEffect(() => {
        console.log('trying this darn set')
    }, [US]);


    return (
        <div>
            <Button color='danger' onClick={filterUSPlayers}>US only players</Button>
            <Button color='success' onClick={filterWorldPlayers}> World players</Button>
        </div>);
}
