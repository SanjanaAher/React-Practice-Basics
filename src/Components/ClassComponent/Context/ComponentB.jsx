import React, { Component } from "react";
import ComponentC from "./ComponentC";
import UserContext from "./UserContext";

class ComponentB extends Component {
  render() {
    return (
      <div>
        {/* <h1>Learning Context</h1> */}
        This is Middle Component(Used When we want to Access props in middle
        Component-This is Component B -{this.context})(Used for only single
        context)
        <ComponentC />
      </div>
    );
  }
}
ComponentB.contextType = UserContext;

export default ComponentB;
