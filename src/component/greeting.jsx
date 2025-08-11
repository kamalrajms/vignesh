import React, { useState } from "react";
import styles from "./Greeting.module.css";

// const[stateVariable,setStartFunction]=useState(initial value)

export default function greeting() {
  const [count, setcount] = useState(0);

  const onchange = (e) => {
    setcount(count + 1);
  };
  function handleclick() {
    alert("Button Clicked");
  }
  console.log(count);
  return (
    <div>
      <p className={styles.lorem}>Count:{count}</p>
      <button onClick={onchange}>increment</button>
      <br></br>
      <button onClick={handleclick}>Onclick</button>
    </div>
  );
}
