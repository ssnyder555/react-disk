import React, { Component } from 'react';



class CreateGame extends Component {
  constructor(){
    super();

    this.state = {
      course:        '',
      numberOfHoles: Number,
      swings:         Number,
    }
  }
  updateGame = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value})

  }
  render(){
    return (
      <form onsubmit={this.props.addGame.bind(null, this.state)}>
        <label>
          Course:
            <input type='text' name='title'value={this.state.title} onChange={this.updateGame}/>
        </label>
        <label>
          Holes:
            <input type='text' name='holes' value={this.state.holes} onChange={this.updateGame}/>
        </label>
        <label>
          Swings:
            <input type='text' name='swings' value={this.state.swings} onChange={this.updateGame}/>
        </label>
        <button type='Submit'>Create Game</button>


      </form>
    )
  }

}


export default CreateGame;
