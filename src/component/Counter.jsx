import React, { useState } from "react";

export default function Counter() {
  const [count, SetCount] = useState(0);
  function handleInc() {
    SetCount(count + 1);
  }
  function handleDec() {
    SetCount(count - 1);
  }
  function handleReset() {
    SetCount(0);
  }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleInc}>Increment</button>
      <br />
      <button onClick={handleDec}>Decrement</button>
      <br />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
