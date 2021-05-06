import React, { Component } from "react";

class Random extends Component {
  constructor(props) {
    super(props);
    this.state = 0;
    // this.handleClick = this.handleClick.bind(this);
  }

//   handleClick() {}

  render() {
    const random1 = Math.floor(Math.random() * 8) + 1;
    const random2 = Math.floor(Math.random() * 8) + 1;
    const random3 = Math.floor(Math.random() * 8) + 1;

    return (
      <div>
        <h1>
          {" "}
          {random1} - {random2} - {random3}
        </h1>
      </div>
    );
  }
}

export default Random;
