import React, { useState, useEffect } from "react";

export default function Child({ getItem }) {
  const [item, setitem] = useState([]);
  useEffect(() => {
    setitem(getItem());
    console.log("updating item");
  }, [getItem]);
  return (
    <div>
      {item.map((item) => (
        <div key={item}> {item}</div>
      ))}
    </div>
  );
}
