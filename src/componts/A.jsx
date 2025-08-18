import React, { createContext } from "react";
import B from "./B";
export const Pass = createContext();

export default function A() {
  let name = "Vignesh";
  return (
    <div>
      A components
      <Pass.Provider value={name}>
        <B />
      </Pass.Provider>
    </div>
  );
}
