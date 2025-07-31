import React from "react";
import Greeting from "./component/greeting";
const name = "john";

export default function App() {
  return (
    <div>
      <h2> Hello john,{name}</h2>
      <Greeting />
    </div>
  );
}
