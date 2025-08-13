import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/Services">Services</Link>
      <Link to="/Contact">Contact</Link>
    </div>
  );
}
