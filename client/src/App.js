import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import PlayerCard from './Components/WWCplayersCard';
import WWCplayers from './Components/WWCplayers';

class App extends React.Component {


  constructor() {
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        this.setState({ ...this.state, players: res.data })
      })
      .catch(err => console.log(err))
  }


  render() {
    return (
      <div className="App" >
        <div className='wwc_players'>
          {/* <FilterPlayers props={this.state.players} /> */}
          <WWCplayers players={this.state.players} />
          <h1> WWC Players:</h1 >
          {this.state.players.map(player => (
            < PlayerCard player={player} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
