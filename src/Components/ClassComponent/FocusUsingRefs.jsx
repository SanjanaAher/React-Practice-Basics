import React, { Component } from "react";
class FocusUsingRefs extends Component {
  constructor(props) {
    super(props);
    //1.create property
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    //3.To focus while Mounting
    this.inputRef.current.focus();
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  };
  render() {
    return (
      <div>
        <h1>Focus Using Refs In CLass Component and Accessing the value.</h1>
        {/* 2.Calling ref */}
        <input type="text" ref={this.inputRef}></input>
        <br />
        <button onClick={this.clickHandler}>Click to Access Value</button>
        <br />
      </div>
    );
  }
}

export default FocusUsingRefs;
