import React, { Component } from "react";

class RenderProps extends Component {
  render() {
    return (
      <div>
        <h1>Rendering Props</h1>
        <h2>{this.props.render(false)}</h2>
      </div>
    );
  }
}

export default RenderProps;
