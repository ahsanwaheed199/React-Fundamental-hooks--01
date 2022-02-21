import React, { Component } from "react";

export class LifeCycleTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }
  logMouseMovement = (e) => {
    console.log(e.clientX);
    this.setState({ x: e.clientX, y: e.clientY });
  };
  componentDidMount() {
    window.addEventListener("mousemove", this.logMouseMovement);
  }
  render() {
    return (
      <div>
        <h1>
          X - {this.state.x} any Y - {this.state.y}
        </h1>
      </div>
    );
  }
}

export default LifeCycleTwo;
