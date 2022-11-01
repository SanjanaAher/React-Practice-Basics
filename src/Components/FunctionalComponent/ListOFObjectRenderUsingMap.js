import React from "react";
import ChildListOfObjectRenderUsingMap from "./ChildListOfObjectRenderUsingMap";

function ListOFObjectRenderUsingMap() {
  const ListofObjects = [
    {
      id: 1,
      name: "sanju",
      age: 22,
    },
    {
      id: 2,
      name: "Anju",
      age: 32,
    },
    {
      id: 3,
      name: "MAnju",
      age: 43,
    },
  ];

  const nameList = ListofObjects.map((ListofObjects) => (
    <ChildListOfObjectRenderUsingMap
      key={ListofObjects.id}
      ListofObjects={ListofObjects}
    />
  ));
  return (
    <div>
      <h1>Learning List of Objects REndering using Map() Method.</h1>
      <h3>
        Creating Child Component to REnder JSX By passing data to child
        Component
      </h3>
      <h4>{nameList}</h4>
    </div>
  );
}

export default ListOFObjectRenderUsingMap;
