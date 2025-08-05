import React from "react";
import Greeting from "./component/greeting";
import Onchange from "./component/Onchange";
import Onsubmit from "./component/onsubmit";
import MouseEnter from "./component/mouseEnter";
import OmMouseLeaves from "./component/omMouseLeaves";
import Counter from "./component/Counter";

export default function App() {
  return (
    <>
      <div className="main-body">
        <Greeting />
        <Onchange />
        <Onsubmit />
        <MouseEnter />
        <OmMouseLeaves />
        <Counter />
      </div>
    </>
  );
}
