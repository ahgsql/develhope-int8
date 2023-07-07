import React, { Component } from "react";
import Age from "./Age";

export default class Welcome extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <p>Welcome {this.props.name}</p>
        {this.props.age > 18 &&
          this.props.age < 65 &&
          this.props.name == "John" && <Age age={this.props.age} />}
      </>
    );
  }
}
Welcome.defaultProps = {
  name: "Default Name",
};
