import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="header">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
      </nav>
    </div>
  );
}
