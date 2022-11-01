import React from "react";

function DestructuringPropsFuncComp({ first, second }) {
  // Destructuring in function body
  //   const { first, second } = props;
  return (
    <div>
      <h1>
        Learing Types of Destructuring In Func Component- <br /> 1.{first} and{" "}
        <br />
        2.{second}
      </h1>
    </div>
  );
}

export default DestructuringPropsFuncComp;
