import React, { Component } from 'react';

class BrokenClick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  clickHandler = e => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <div>
        <h1>{this.state.clicked ? 'Clicked On' : 'Clicked Off'}</h1>
        <button onClick={this.clickHandler}>Click Me!</button>
      </div>
    );
  }
}

export default BrokenClick;
