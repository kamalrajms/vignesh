import React, { useState } from "react";

export default function ConditionalRendering() {
  const [show, setShow] = useState(true);
  let condition = true;
  return (
    <>
      <div>
        {condition ? <p>Hi</p> : <p>Hello</p>}
        {condition && <p>This will show</p>}
      </div>
      <div>
        <button onClick={() => setShow(!show)}>
          {show ? "Hide" : "Show"}Text
        </button>
        {show && <p>this is atoggleable text!</p>}
      </div>
    </>
  );
}
