import React, { Component } from "react";

class Random extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: null,
      num2: null,
      num3: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const random1 = Math.floor(Math.random() * 7) + 1;
    const random2 = Math.floor(Math.random() * 7) + 1;
    const random3 = Math.floor(Math.random() * 7) + 1;

    this.setState({
      num1: random1,
      num2: random2,
      num3: random3,
    });
  }

  render() {
    return (
      <div>
        <h1>
          <button onClick={this.handleClick}>Pull Lever</button>
          <br />
          <br />
          {this.state.num1} {this.state.num2} {this.state.num3} <br />
          <br />
          {this.state.num1 == 7 && this.state.num2 == 7 && this.state.num3 == 7
            ? "Winner, Winner Chicken Dinner"
            : "Keep Trying"}
        </h1>
      </div>
    );
  }
}

export default Random;
