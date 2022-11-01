import React, { Component } from "react";
class ClassCompProps extends Component {
  render() {
    return (
      <div>
        <h1>Learning Props with class Component</h1>
        <h4>I am {this.props.name}</h4>
        {this.props.children}
      </div>
    );
  }
}

export default ClassCompProps;
