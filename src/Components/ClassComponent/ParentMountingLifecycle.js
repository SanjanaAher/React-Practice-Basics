import React, { Component } from "react";
import ChildListOfObjectRenderUsingMap from "../FunctionalComponent/ChildListOfObjectRenderUsingMap";
import ChildMountingLifeCycle from "./ChildMountingLifeCycle";

export class ParentMountingLifecycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "Sanju",
    };
    console.log("L1 Method1 Constructor(props)");
  }

  static getDerivedStateFromProps(state, props) {
    console.log(" L1 Method2 getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("L1 Method4 ComponentDidMount");
  }
  render() {
    console.log("L1 Method3 Render()");
    return (
      <div>
        <h1>LEarning Mounting Lifecycle Methods for Class Component</h1>
        <h3>******Go to Console to Understand**********</h3>
        <h2>
          1.Component(props) <br />
          2.Static getDerivedStateFromProps(props,state) <br />
          3.render() <br /> 4.componentDidMount
        </h2>
        <ChildMountingLifeCycle />
      </div>
    );
  }
}

export default ParentMountingLifecycle;
