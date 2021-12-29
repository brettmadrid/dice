import React, { Component } from 'react';
import Dice from './Dice';

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Die1: 1,
      Die2: 6,
    };
  }
  render() {
    return (
      <div>
        <Dice val={this.state.Die1} />
        <Dice val={this.state.Die2} />
        <button>Roll Dice</button>
      </div>
    );
  }
}

export default RollDice;
