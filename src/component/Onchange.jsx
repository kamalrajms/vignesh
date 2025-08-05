import React, { useState } from "react";

export default function Onchange() {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Your typed: {text}</p>

      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
        laboriosam labore asperiores unde reiciendis ea cumque libero eos, a,
        amet neque pariatur, provident mollitia exercitationem est velit aut quo
        nemo?{text}
      </div>
    </div>
  );
}
