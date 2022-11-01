import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";
class PrevStateInClassCompo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  Increment() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   if we want to write code after waiting for state to update
    //   () => {
    //     console.log(this.state.count);
    //   }
    // );
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  IncrementFive() {
    this.Increment();
    this.Increment();
    this.Increment();
    this.Increment();
    this.Increment();
  }
  render() {
    return (
      <div>
        <h1>Learning state based on Prev State in Class Component</h1>
        <h2>Count-{this.state.count}</h2>
        <button onClick={() => this.IncrementFive()}>Increment</button>
      </div>
    );
  }
}
export default PrevStateInClassCompo;
