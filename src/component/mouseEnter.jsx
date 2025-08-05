import React from "react";

export default function mouseEnter() {
  function handleEnter() {
    alert("Hover");
  }
  return (
    <div
      style={{ width: "200px", height: "400px", background: "red" }}
      onMouseEnter={handleEnter} onm
    >
      Hover over me
    </div>
  );
}
