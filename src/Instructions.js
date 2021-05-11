import React, { Component } from "react";

class Instructions extends Component {
  render() {
    return (
      <div className="container">
        <div className="display-3 instructions">Instructions for the Game</div>
        <div className="instructions">
          <h3>The goal is to get three 2's in a row.</h3>
        </div>
        <div>
          <ul>
            <li>Click the Spin button multiple times until you see three 2's.</li>
            <li>If you would like to play again, click the "Play Again" button.</li>
            <li>Have Fun!!</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Instructions;
