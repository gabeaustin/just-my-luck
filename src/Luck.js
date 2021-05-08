import React, { Component } from "react";

class Luck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 0,
      num2: 0,
      num3: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let random1 = Math.floor(Math.random() * 4) + 1;
    let random2 = Math.floor(Math.random() * 4) + 1;
    let random3 = Math.floor(Math.random() * 4) + 1;

    this.setState({
      num1: random1,
      num2: random2,
      num3: random3,
    });
  }

  render() {
    return (
      <div>
        <h1>Play the 444 Slot</h1>
        <h1>
          {this.state.num1} {this.state.num2} {this.state.num3}
        </h1>

        {this.state.num1 === 4 &&
        this.state.num2 === 4 &&
        this.state.num3 === 4 ? (
          <h2>Winner, Winner Chicken Dinner</h2>
        ) : (
          <button onClick={this.handleClick}>Spin</button>
        )}
      </div>
    );
  }
}

export default Luck;
