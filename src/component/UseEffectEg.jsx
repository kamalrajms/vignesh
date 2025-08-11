import React, { useEffect } from "react";

export default function UseEffectEg() {
  useEffect(() => {
    console.log("component Mounted !");
  }, []);
  return <div></div>;
}
