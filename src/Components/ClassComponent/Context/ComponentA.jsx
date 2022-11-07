import React, { Component } from "react";
import ComponentB from "./ComponentB";

class ComponentA extends Component {
  render() {
    return (
      <div>
        <h1>Learning Context</h1>
        This is Parent Component(Passing props directly to grand child component
        by skipping middle component)
        <ComponentB />
      </div>
    );
  }
}

export default ComponentA;
