import React, { useRef, useState, useEffect } from "react";

export default function App() {
  const focusing = useRef();

  const focusinput = () => {
    focusing.current.focus();
  };

  const [sec, setSec] = useState(0);
  const intRef = useRef();

  useEffect(() => {
    intRef.current = setInterval(() => {
      setSec((s) => s + 1);
    }, 1000);
    return () => clearInterval(intRef.current);
  }, []);

  const [show, setshow] = useState(true);
  const inputRef = useRef(0);
  const [imageURL, setImageURL] = useState("");

  const handleimage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const previous = URL.createObjectURL(file);
      setImageURL(previous);
      setshow(false);
    }
  };

  return (
    <>
      <label htmlFor="name">name</label>
      <input type="text" id="name" />

      
      <input type="text" ref={focusing} placeholder="Text" />
      <button onClick={focusinput}>focus input</button>

      <p>timer:{sec}</p>
      <button onClick={() => clearInterval(intRef.current)}>stop</button>

      <div className="container">
        <input
          type="file"
          accept="images/*"
          ref={inputRef}
          hidden
          onChange={handleimage}
        />
        {show ? (
          <div className="img-box" onClick={() => inputRef.current.click()}>
            up load image
          </div>
        ) : (
          <img
            src={imageURL}
            alt="imge"
            onClick={() => inputRef.current.click()}
          />
        )}
      </div>
    </>
  );
}
