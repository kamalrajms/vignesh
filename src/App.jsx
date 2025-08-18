import React, { useRef, useState, useEffect, useReducer } from "react";

export default function App() {
  // const [count, setCount] = useState(0);
  const initial = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initial);

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decriment":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
      default:
        return state;
    }
  }
  return (
    <>
      {/* <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>inc</button>
      <br></br>
      <button onClick={() => setCount(count - 1)}>Dev</button>
      <br />
      <button onClick={() => setCount(0)}>reset</button> */}
      <h1>Count : {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <br />
      <button onClick={() => dispatch({ type: "decriment" })}>Decrement</button>
      <br />
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}
