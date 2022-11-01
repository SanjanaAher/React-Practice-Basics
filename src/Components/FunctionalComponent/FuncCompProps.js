import React from "react";
function FuncCompProps(props) {
  return (
    <div>
      <h1>Learning Props with functional component.</h1>
      <h4>
        I am {props.name}.I love {props.love}.
      </h4>
      {props.children}
    </div>
  );
}

export default FuncCompProps;
