import React, { Component } from "react";

export class ChildMountingLifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "Sanju",
    };
    console.log("L2  Method1");
  }

  static getDerivedStateFromProps(state, props) {
    console.log("L2 Method2 getDerivedStateWithProps");
    return null;
  }

  componentDidMount() {
    console.log("L2 Method4 ComponentDidMount");
  }
  render() {
    console.log("L2 Method3 Render()");
    return (
      <div>
        <h1>Children of Mounting Lifecycle Method</h1>
      </div>
    );
  }
}

export default ChildMountingLifeCycle;
