import React, { Component } from "react";

export class ChildUpdateLifecycleMethods extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "Sanju",
    };
  }

  static getDerivedStateFromProps(state, props) {
    console.log("U2 Method1 getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate() {
    console.log("U2 Method2 shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("U2 Method4 getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("U2 MEthod5 ComponentDidUpdate");
  }

  render() {
    console.log("U2 Method3 REnder()");
    return (
      <div>
        <h1>Child Update Component</h1>
      </div>
    );
  }
}

export default ChildUpdateLifecycleMethods;
