import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./componts/Home";
import About from "./componts/About";
import BolgDetailes from "./componts/BolgDetailes";
import Header from "./componts/Header";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/About/:id" element={<BolgDetailes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
