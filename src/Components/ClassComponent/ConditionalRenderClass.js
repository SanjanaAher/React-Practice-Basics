import React, { Component } from "react";

class ConditionalRenderClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    //If Else(cannot be used in JSX)
    // if (this.state.isLoggedIn) {
    //   return <div>If part</div>;
    // } else {
    //   return <div>Else Part </div>;
    // }

    //Element Variable
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = "If part of element variable";
    // } else {
    //   message = "Else part of ELement Variable";
    // }
    // return <div>{message}</div>;

    //Ternary Operator
    // return this.state.isLoggedIn ? (
    //   <div>True of Ternary Operator</div>
    // ) : (
    //   <div>False Part of Ternary Operator</div>
    // );

    return (
      <>
        <h1>
          Learning Conditional Rendering in Class Component-
          <br />
          1.If Else <br />
          2.Element Variable <br />
          3.Ternary Operator <br /> 4.Short-Circuit Operator{" "}
        </h1>
        {/* Short Circuit Operator */}
        {this.state.isLoggedIn && <div>Short Circuit Operator</div>}
      </>
    );
  }
}

export default ConditionalRenderClass;
