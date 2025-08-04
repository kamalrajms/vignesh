import React from "react";
import Greeting from "./component/greeting";

export default function App() {
  return (
    <>
      <div className="main-body">
        <Greeting name="vignesh" age={23} />
        <Greeting name="Kamal" age={29} />
        <Greeting name="qwer" age={29} />
        <Greeting />
      </div>
    </>
  );
}
