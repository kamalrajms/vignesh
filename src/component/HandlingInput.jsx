import React, { useState } from "react";

export default function HandlingInput() {
  const [name, setName] = useState("");
  const [isChecked, setChecked] = useState(false);
  return (
    <div>
      <h2>Controlled Text Input</h2>
      <label htmlFor="">Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setChecked(e.target.checked)}
      />

      <p>typed Name:{name}</p>
      <p>Check Box:{isChecked ? "Checked" : "Not Checked"}</p>
    </div>
  );
}
