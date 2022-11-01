import { click } from "@testing-library/user-event/dist/click";
import React from "react";

function EventHandlingFuncComp() {
  function clickHandler() {
    console.log("Clicked Me");
  }
  return (
    <div>
      <h1>Learning EventHandling In Function Component</h1>
      <button onClick={clickHandler}>Click Me</button>
    </div>
  );
}

export default EventHandlingFuncComp;
