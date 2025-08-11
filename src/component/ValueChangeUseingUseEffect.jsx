import React, { useEffect, useState } from "react";

export default function ValueChangeUseingUseEffect() {
  const [count, setcount] = useState(0);

  useEffect(() => {
    console.log(`Count Changes to :${count}`);
  }, [count]);
  return (
    <div>
      <h2>count:{count}</h2>
      <button onClick={() => setcount(count + 1)}>Increment</button>
    </div>
  );
}
