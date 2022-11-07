import React, { Component } from "react";
import ChildForwardREfs from "../FunctionalComponent/ChildForwardREfs";

export class ParentForwardRefs extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  clickHandler = () => {
    this.inputRef.current.focus();
  };
  render() {
    return (
      <div>
        <ChildForwardREfs ref={this.inputRef} />
        <button onClick={this.clickHandler}>Forwarding Refs</button>
      </div>
    );
  }
}

export default ParentForwardRefs;
