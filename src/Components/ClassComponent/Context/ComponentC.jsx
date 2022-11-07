import React, { Component } from "react";
import { UserConsumer } from "./UserContext";

class ComponentC extends Component {
  render() {
    return (
      <UserConsumer>
        {(name) => {
          return (
            <h1>
              Child Component(Accessing values of props directly in grand child
              Component)-Hello {name}
            </h1>
          );
        }}
      </UserConsumer>
    );
  }
}

export default ComponentC;
