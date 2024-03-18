import { Link } from "react-router-dom";
import React, { useState } from "react";
import sidebarImage from "../assets/film.png";
// import "./Sidebar.css";

export default function Sidebar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsSidebarVisible(true);
  };

  const handleMouseLeave = () => {
    setIsSidebarVisible(false);
  };
  return (
    <div
      className="sidebar-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`sidebar ${isSidebarVisible ? "visible" : "hidden"}`}>
        <img className="sidebar-image" src={sidebarImage} alt="sidebar" />
      </div>
    </div>
  );
}
