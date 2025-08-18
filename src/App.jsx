import React, {
  useRef,
  useState,
  useEffect,
  useReducer,
  useCallback,
} from "react";
import Child from "./Child";

export default function App() {
  const [count, setcount] = useState(0);
  const sayHello = useCallback(() => {
    console.log("hello");
  }, []);

  return (
    <>
      <p>Count:{count}</p>
      <button onClick={() => setcount(count + 1)}>increment</button>
      <Child onClick={sayHello} />
    </>
  );
}
