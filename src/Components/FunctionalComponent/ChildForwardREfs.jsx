import React from "react";

// function ChildForwardREfs() {
//   return (
//     <div>
//       <input type="text"></input>
//     </div>
//   );
// }

const ChildForwardREfs = React.forwardRef((props, ref) => {
  return <input type="text" ref={ref} />;
});
export default ChildForwardREfs;
