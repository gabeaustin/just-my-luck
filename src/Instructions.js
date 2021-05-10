import React, { Component } from "react";

class Instructions extends Component {
    render() {
        return (
            <div>
                Instructions for the Game

                The goal is to get three 2's in a row.
                <ul>
                    <li>Click the Spin button multiple times until you see three 2's</li>
                    <li>If you would like to play again, click the "Play Again" button</li>
                    <li>Have Fun!!</li>
                </ul>
            </div>
        )
    }
}

export default Instructions;