import React, { Component } from "react";

export default class Welcome extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <p>Welcome {this.props.name}</p>
        <p> Your age is {this.props.age}</p>
      </>
    );
  }
}
Welcome.defaultProps = {
  age: 20,
  name: "Default Name",
};
