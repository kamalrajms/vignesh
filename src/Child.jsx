import React from "react";

export default function Child({ onclick }) {
  console.log("child rendered");

  return (
    <div>
      <button onClick={onclick}>click me</button>
    </div>
  );
}
