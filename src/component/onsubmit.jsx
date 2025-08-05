import React, { useState } from "react";

export default function Onchange() {
  const [text, setText] = useState({
    name: "",
    lastname: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    alert("form is going to submit");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name<sup>*</sup>
      </label>
      <input
        type="text"
        value={text.name}
        required
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">submit</button>
    </form>
  );
}
