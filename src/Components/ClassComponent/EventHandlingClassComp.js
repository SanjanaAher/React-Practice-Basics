import React, { Component } from "react";

export class EventHandlingClassComp extends Component {
  clickHander() {
    console.log("You have already Clicked ME.");
  }
  render() {
    return (
      <div>
        <h1>Learning EventHandling in Class Component</h1>
        <button onClick={this.clickHander}>Click Me here</button>
      </div>
    );
  }
}

export default EventHandlingClassComp;
