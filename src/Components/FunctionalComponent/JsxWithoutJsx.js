import React from "react";
function JsxWithoutJsx() {
  //   return (
  //     <div>
  //       <h1>With JSX</h1>
  //     </div>
  //   );

  return React.createElement(
    "div",
    { id: "div", className: "withoutJsx" },
    React.createElement(
      "h1",
      null,
      "Learning JSX Without JSX using createElement"
    )
  );
}

export default JsxWithoutJsx;
