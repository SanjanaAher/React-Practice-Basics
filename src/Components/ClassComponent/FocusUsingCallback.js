import React, { Component } from "react";
class FocusUsingCallback extends Component {
  constructor(props) {
    super(props);
    this.CbRef = null;
    this.setCbRef = (Element) => {
      this.CbRef = Element;
    };
  }
  componentDidMount() {
    if (this.CbRef) {
      this.CbRef.focus();
    }
  }

  clickHandler = () => {
    alert(this.CbRef.value);
  };
  render() {
    return (
      <div>
        <h1>Focus Using Callback Refs in class component.</h1>
        <input type="text" ref={this.setCbRef}></input>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default FocusUsingCallback;
