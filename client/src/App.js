import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import PlayerCard from './Components/WWCplayersCard';

class App extends React.Component {


  constructor() {
    super();
    this.state = {
      players: []
      // name: '',
      // country: '',
      // searches: '',
      // id: ''

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
          {/* <FilterPlayers props={this.state.playersList} /> */}
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
