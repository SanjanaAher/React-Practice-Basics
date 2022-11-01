import React, { Component } from "react";
import ChildUpdateLifecycleMethods from "./ChildUpdateLifecycleMethods";

export class ParentUpdateLifecycleMethods extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "Sanju",
    };
  }

  static getDerivedStateFromProps(state, props) {
    console.log("U1 Method1 getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate() {
    console.log("U1 Method2 shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("U1 Method4 getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("U1 MEthod5 ComponentDidUpdate");
  }

  HandleClick = () => {
    this.setState({
      userName: "Dnyanu",
    });
  };
  render() {
    console.log("U1 Method3 REnder()");
    return (
      <div>
        <h1>Component Update Lifecycle Methods</h1>
        <h2>***********Go to Console to Know more.********</h2>
        <h3>
          1.getDerivedStateFromProps(props,state) <br /> 2.ShouldComponentMount{" "}
          <br /> 3.Render <br /> 4.getSnapshotBeforeUpdate(prevProps,PrevState){" "}
          <br /> 5.ComponentDidUpdate(prevProps,prevState,snapshot)
        </h3>
        <button onClick={this.HandleClick}>Click</button>
        <ChildUpdateLifecycleMethods />
      </div>
    );
  }
}

export default ParentUpdateLifecycleMethods;
