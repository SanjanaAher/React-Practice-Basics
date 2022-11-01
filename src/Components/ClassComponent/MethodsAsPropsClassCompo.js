import React, { Component } from "react";
import ChildMethodAsPropsClassCompo from "../FunctionalComponent/ChildMethodAsPropsFuncCompo";

export class MethodsAsPropsClassCompo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parent: "daddy",
    };
  }

  clickHandler = (childName) => {
    alert(`HEllo, I am Parent ${this.state.parent},${childName}`);
  };
  render() {
    return (
      <div>
        <h1>
          Learning Passing Methods as Props from Parent to Child Component and
          Passinf Parameters from child component to method in parent component.
        </h1>
        <ChildMethodAsPropsClassCompo clickHandler={this.clickHandler} />
      </div>
    );
  }
}

export default MethodsAsPropsClassCompo;
