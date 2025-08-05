import React, { useState } from "react";

export default function omMouseLeaves() {
  const [color, setColor] = useState("lightblue");
  return (
    <div
      style={{ width: "200px", height: "400px", background: color }}
      onMouseLeave={() => setColor("orange")}
      onMouseEnter={() => setColor("black")}
    >
      Hover over me
    </div>
  );
}
