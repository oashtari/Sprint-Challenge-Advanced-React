import React from 'react';
import { Card, CardTitle, CardBody, CardText } from 'reactstrap';

const PlayerCard = props => {
    return (
        <div style={{ margin: '20px' }}>
            <Card style={{ backgroundColor: '#b3ffff', width: '300px' }} className='allPlayers'>
                <CardText className='test'>Name: {props.player.name}</CardText>
                <CardText className='test'>Country: {props.player.country}</CardText>
                <CardText className='test'>Search rank: {props.player.searches}</CardText>
            </Card>
        </div>
    )
}

export default PlayerCard;