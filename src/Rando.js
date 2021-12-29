import React, { Component } from 'react';

class Rando extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
  }

  makeTimer() {
    setInterval(() => {
      let random = Math.floor(Math.random() * this.props.maxNum);
      this.setState({ num: random });
    }, 1000);
  }

  render() {
    return <div>{this.state.num}</div>;
  }
}

export default Rando;
