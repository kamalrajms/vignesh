import React, { useContext } from "react";
import { Pass } from "./A";

export default function C() {
  const passName = useContext(Pass);
  return <div>C Component {passName} </div>;
}
