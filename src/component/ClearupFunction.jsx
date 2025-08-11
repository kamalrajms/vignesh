import React, { useState, useEffect } from "react";

export default function ClearupFunction() {
  const [Sec, setSec] = useState(0);

  useEffect(() => {
    console.log("Start timer...");
    const interval = setInterval(() => {
      setSec((pre) => pre + 1);
    }, 1000);
    return () => {
      console.log("clear up time...");
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <h2>SECONDS:{Sec}</h2>
    </div>
  );
}
