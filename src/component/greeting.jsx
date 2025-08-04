import React, { useState } from "react";

// const[stateVariable,setStartFunction]=useState(initial value)

export default function greeting() {
  const [count, setcount] = useState(0);
  const onchange = (e) => {
    setcount(count + 1);
  };
  console.log(count);
  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={onchange}>increment</button>
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
