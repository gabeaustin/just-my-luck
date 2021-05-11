import React, { Component } from "react";

class Instructions extends Component {
  render() {
    return (
      <div className="container">
        <div className="instructions my-2">
          <h4>
            <ul>
              <li>
                1. Click the Spin button multiple times until you see three 2's.
              </li>
              <li>
                2. If you would like to play again, click the "Play Again"
                button.
              </li>
              <li>3. Have Fun!!</li>
            </ul>
          </h4>
        </div>
      </div>
    );
  }
}

export default Instructions;
