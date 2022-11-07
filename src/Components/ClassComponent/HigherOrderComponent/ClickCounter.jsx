import React, { Component } from "react";
import UpdatedComponent from "./HOC";

class ClickCounter extends Component {
  render() {
    const { name, count, incrementCount } = this.props;
    return (
      <div>
        <h1>Learing Higher Order Components</h1>
        <button onClick={incrementCount}>
          {name} {this.props.sname} Clicked {count} times
        </button>
      </div>
    );
  }
}

export default UpdatedComponent(ClickCounter, 10);
