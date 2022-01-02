import React, { Component } from 'react';
import Dice from './Dice';

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Die1: 1,
      Die2: 1,
      isRolling: false,
    };
  }

  getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  rollDice = () => {
    const die1 = this.getRandomIntInclusive(1, 6);
    const die2 = this.getRandomIntInclusive(1, 6);

    this.setState({ Die1: die1 }, () =>
      this.setState({ Die2: die2 }, this.setState({ isRolling: false })),
    );
  };

  rollHandler = e => {
    this.setState({ isRolling: true }, () =>
      setTimeout(() => this.rollDice(), 1000),
    );
  };

  render() {
    return (
      <div>
        <Dice val={this.state.Die1} />
        <Dice val={this.state.Die2} />
        <button onClick={() => this.rollHandler()}>
          {this.state.isRolling ? 'Rolling...' : 'Roll Dice'}
        </button>
      </div>
    );
  }
}

export default RollDice;
