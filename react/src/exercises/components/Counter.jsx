import React, { Component, componentWillMount } from "react";

export default class Counter extends Component {
  state = { count: 0, intervalId: 0 };
  componentDidMount() {
    console.log("mount");
    this.intervalId = setInterval(() => {
      this.setState((state) => {
        return { count: state.count + 1 };
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    return (
      <>
        <h1>Counter is: {this.state.count}</h1>
      </>
    );
  }
}
