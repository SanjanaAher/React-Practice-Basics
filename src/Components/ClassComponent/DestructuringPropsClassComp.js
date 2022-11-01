import React, { Component } from "react";
class DestructuringPropsClassComp extends Component {
  render() {
    const { first, second } = this.props;
    return (
      <div>
        <h1>
          Types of Destructuring in Class Component- <br />
          1.{this.props.first} <br /> 2.{second}
        </h1>
      </div>
    );
  }
}
export default DestructuringPropsClassComp;
