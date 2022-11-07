import React, { Component } from "react";

class HoverCounterTwo extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        {/* <h1>Learning Rendering Props</h1> */}

        <h2 onMouseOver={incrementCount}>hovered {count} times.</h2>
      </div>
    );
  }
}

export default HoverCounterTwo;
