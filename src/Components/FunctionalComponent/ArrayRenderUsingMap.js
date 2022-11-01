import React from "react";

function ArrayRenderUsingMap() {
  const names = ["sanju", "anju", "Manju"];
  const nameList = names.map((name, index) => (
    <h1 key={index}>
      {index + 1}.{name}
    </h1>
  ));
  return (
    <div>
      <h1>Learning Array Rendering using Map() method with index as key.</h1>
      <h3>{nameList}</h3>
    </div>
  );
}

export default ArrayRenderUsingMap;
