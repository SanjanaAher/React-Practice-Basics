import React, { Component } from "react";

class StateInClassCompo extends Component {
  constructor() {
    super();

    this.state = {
      message: "This is State",
    };
  }

  changeMessage() {
    this.setState({
      message: "This is SetState",
    });
  }
  render() {
    return (
      <div>
        <h1>Learning State in Class Component</h1>
        <h2>{this.state.message}</h2>
        <button onClick={() => this.changeMessage()}>Change</button>
      </div>
    );
  }
}

export default StateInClassCompo;
