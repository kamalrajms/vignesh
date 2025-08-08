import React, { useState } from "react";

export default function ToggleLightMode() {
  const [dark, setDark] = useState(false);
  return (
    <>
      <div
        style={{
          background: dark ? "#333" : "#fff",
          color: dark ? "#fff" : "#000",
          padding: "40px",
        }}
      >
        <button onClick={() => setDark(!dark)}>
          switch to {dark ? "Light" : "Dark"}Mode
        </button>
        <p>You are in{dark ? "Dark" : "Light"}Mode</p>
      </div>
    </>
  );
}
