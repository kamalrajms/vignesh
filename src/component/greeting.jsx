import React from "react";

export default function greeting({ name = "Guest", age = "unknown" }) {
  return (
    <div>
      <h3>
        Hello,{name}and age is{age}
      </h3>
    </div>
  );
}

// import React from "react";

// export default function greeting(props) {
//   return (
//     <div>
//       <h3>Hello,{props.name}</h3>
//     </div>
//   );
// }
