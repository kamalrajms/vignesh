import React from "react";
import Greeting from "./component/greeting";
import Onchange from "./component/Onchange";
import Onsubmit from "./component/onsubmit";
import MouseEnter from "./component/mouseEnter";
import OmMouseLeaves from "./component/omMouseLeaves";
import Counter from "./component/Counter";
import ConditionalRendering from "./component/ConditionalRendering";
import ListRendering from "./component/ListRendering";
import ToggleLightMode from "./component/ToggleLightMode";

export default function App() {
  let done = false;
  return (
    <>
      <div className="main-body">
        {done && (
          <div>
            <Greeting />
            <Onchange />
            <Onsubmit />
            <MouseEnter />
            <OmMouseLeaves />
            <Counter />
          </div>
        )}

        <ConditionalRendering />
        <ListRendering />
        <ToggleLightMode />
      </div>
    </>
  );
}
