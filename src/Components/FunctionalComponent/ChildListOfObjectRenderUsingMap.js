import React from "react";

function ChildListOfObjectRenderUsingMap({ ListofObjects }) {
  return (
    <div>
      <h1>
        I am {ListofObjects.name}.I am {ListofObjects.age} years old.
      </h1>
    </div>
  );
}

export default ChildListOfObjectRenderUsingMap;
