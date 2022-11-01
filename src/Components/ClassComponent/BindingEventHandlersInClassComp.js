import React, { Component } from "react";

class BindingEventHandlersInClassComp extends Component {
  constructor() {
    super();

    this.state = {
      message: "HEllo",
    };
  }
  clickHandler = () => {
    this.setState({
      message: "GoodBye",
    });
  };
  render() {
    return (
      <div>
        <h1>Binding Event HAndlers in Class Component</h1>
        <h3>{this.state.message}</h3>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default BindingEventHandlersInClassComp;
