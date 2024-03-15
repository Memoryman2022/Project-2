import { Link, useNavigate } from "react-router-dom";
import React from "react";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/welcome">Welcome</Link>
        </li>
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
