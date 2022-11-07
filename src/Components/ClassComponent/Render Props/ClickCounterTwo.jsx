import React, { Component } from "react";

class ClickCounterTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    return (
      <div>
        <h1>Learning Rendering of props</h1>
        <button onClick={this.incrementCount}>
          Click {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClickCounterTwo;
