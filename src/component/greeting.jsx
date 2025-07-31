import React from "react";
import "./greeting.css";
import style from "../index.css";

export default function Greeting() {
  return (
    <div className="greeting">
      <p style={{ padding: "500px" }}>
        Hello from Greeting Components !{new Date().toLocaleDateString()}
      </p>
      <h1 className={style.lorem}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum dolorem
        recusandae doloremque fugit enim totam rem soluta, atque magnam officiis
        accusantium sed eius, incidunt voluptatum a, dignissimos aperiam
        dolorum? Id.
      </h1>
    </div>
  );
}
