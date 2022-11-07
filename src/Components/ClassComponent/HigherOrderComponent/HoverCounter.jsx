import React, { Component } from "react";
import UpdatedComponent from "./HOC";
class HoverCounter extends Component {
  render() {
    const { name, count, incrementCount } = this.props;
    return (
      <div>
        <h1 onMouseOver={incrementCount}>
          {name} {this.props.sname} Hovered {count} times
        </h1>
      </div>
    );
  }
}

export default UpdatedComponent(HoverCounter);
