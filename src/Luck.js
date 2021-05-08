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
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Play the 444 Slot</h1>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="display-1">
              {this.state.num1} {this.state.num2} {this.state.num3}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-12">
            {this.state.num1 === 4 &&
            this.state.num2 === 4 &&
            this.state.num3 === 4 ? (
              <h2>Winner, Winner Chicken Dinner</h2>
            ) : (
              <button
                onClick={this.handleClick}
                className="btn btn-success btn-lg"
                id="spinButton"
              >
                Spin
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Luck;
