import React from "react";

function ChildMethodAsPropsClassCompo(props) {
  return (
    <div>
      <button
        onClick={() =>
          props.clickHandler("Passing Parameters from Child to Parent")
        }
      >
        I am Child
      </button>
    </div>
  );
}

export default ChildMethodAsPropsClassCompo;
