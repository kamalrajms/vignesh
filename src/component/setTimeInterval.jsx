import React, { useEffect } from "react";

export default function setTimeInterval() {
  //   useEffect(() => {
  //     setInterval(() => {
  //       console.log("Tick");
  //     }, 1000);
  //   }, []);

  let id = setInterval(() => {
    console.log("Tick");
  }, 1000);

  clearInterval(id);

  return <div></div>;
}
