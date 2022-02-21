import React, { Component } from "react";

export class LifeCycleThree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return <div>{this.state.count}</div>;
  }
}

export default LifeCycleThree;
