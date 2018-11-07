import React, {Component} from 'react';
import CreateGame from '../CreateGame';
import GameList from '../GameList';

class ParkContainer extends Component {
  constructor(){
    super();

    this.state = {
      games: []
    }
  }
  getGames = () => {

  }
  componentDidMount() {

  }
  addGame = async (game, e) => {
    e.preventDefualt();
    console.log(game);

    try {
      const createdGame = await fetch('http://localhost:9000/api/v1/disk', {
        method: 'POST',
        body: JSON.stringify(game),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const parsedResponse = await createdGame.json();
      console.log(parsedResponse, ' this is response');

      this.setState({games: [...this.state.games, parsedResponse.data]})

    } catch (err) {
      console.log(err)

    }
  }

  render(){
    console.log(this.state)
    return (
      <div>
        <CreateGame addGame={this.addGame}/>
        <GameList />
      </div>
    )
  }
}


export default ParkContainer;
