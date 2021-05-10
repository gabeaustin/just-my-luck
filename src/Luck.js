import React, { Component } from "react";
import randomColor from "randomcolor";

class Luck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 0,
      num2: 0,
      num3: 0,
    };

    this.state = {
      bgColor: "",
      display: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.winnerBgChange = this.winnerBgChange.bind(this);
    this.getRandomColor = this.getRandomColor.bind(this);
    this.setRandomColor = this.setRandomColor.bind(this);
  }

  handleClick() {
    let random1 = Math.floor(Math.random() * 2) + 1;
    let random2 = Math.floor(Math.random() * 2) + 1;
    let random3 = Math.floor(Math.random() * 2) + 1;

    this.setState({
      num1: random1,
      num2: random2,
      num3: random3,
    });
  }

  winnerBgChange() {
    let color = randomColor();

    this.setState({
      bgColor: color,
    });
  }

  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  setRandomColor() {
    setInterval(document.body.style.backgroundColor = this.getRandomColor(), 2000);
  }

  render() {
    return (
      <div
        className="container border border-success shadow-lg pt-3"
        id="fullAppContainer"
      >
        <div className="row">
          <div className="col">
            <h1 className="mainTitle">
              Play the <span className="mainTitleNumbers">444</span> Slot
            </h1>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="display-1" id="starterNumbers">
              {this.state.num1} {this.state.num2} {this.state.num3}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-12">
            {this.state.num1 === 2 &&
            this.state.num2 === 2 &&
            this.state.num3 === 2 ? (
              <h2 className="mainTitle display-1" id="winnerMessage">
                You Won {this.setRandomColor()}
              </h2>
            ) : (
              //   <style>{{ backgroundColor: this.state.bgColor }}</style> // check how to write style in tenary
              <>
                <button
                  onClick={this.handleClick}
                  className="btn btn-success btn-lg mainTitle"
                  id="spinButton"
                >
                  <span className="display-5">Spin</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Luck;
