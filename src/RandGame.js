import React, { Component } from 'react';

class RandGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      isWinner: false,
    };
  }

  clickHandler = e => {
    this.setState({ num: Math.floor(Math.random() * 10) }, () => {
      if (this.state.num === 7) {
        this.setState({ isWinner: true });
      } else {
        this.setState({ isWinner: false });
      }
    });
  };

  render() {
    return (
      <div>
        <h1>Number is: {this.state.num}</h1>
        {this.state.isWinner ? (
          <h2>YOU WIN!</h2>
        ) : (
          <button onClick={this.clickHandler}>Click Me!</button>
        )}
      </div>
    );
  }
}

export default RandGame;
