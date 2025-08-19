import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./componts/Home";
import About from "./componts/About";
import BolgDetailes from "./componts/BolgDetailes";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <nav className="header">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/About/:id" element={<BolgDetailes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
