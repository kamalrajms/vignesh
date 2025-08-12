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
import HandlingInput from "./component/HandlingInput";
import MultiInput from "./component/MultiInput";
import UseEffectEg from "./component/UseEffectEg";
import ValueChangeUseingUseEffect from "./component/ValueChangeUseingUseEffect";
import ClearupFunction from "./component/ClearupFunction";
import AIPuseEffect from "./component/AIPuseEffect";
import StopWatch from "./component/StopWatch";

export default function App() {
  let done = false;
  return (
    <>
      <div className="main-body">
        {done && (
          <div>
            <Onchange />
            <Onsubmit />
            <MouseEnter />
            <OmMouseLeaves />
            <Counter />
            <Greeting />
            <ConditionalRendering />
            <ListRendering />
            <ToggleLightMode />
            <HandlingInput />
            <MultiInput />
            <UseEffectEg />
            <ValueChangeUseingUseEffect />
            <ClearupFunction />
            <AIPuseEffect />
          </div>
        )}

        <StopWatch />
      </div>
    </>
  );
}
