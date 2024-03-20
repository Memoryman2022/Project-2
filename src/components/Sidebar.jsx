import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import sidebarImage from "../assets/film.png";
import axios from "axios";
// import "./Sidebar.css";

export default function Sidebar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [lastReview, setLastReview] = useState(null);

  const handleMouseEnter = () => {
    setIsSidebarVisible(true);
  };

  const handleMouseLeave = () => {
    setIsSidebarVisible(false);
  };

  //get review
  const getLastReview = () => {
    axios
      .get("http://localhost:5005/reviews/")
      .then((res) => {
        setLastReview(res.data);
        console.log(res);
      })
      .catch((error) => {
        console.error("Error fetching review:", error);
      });
  };

  // useEffect(() => {
  //   getLastReview();
  //   const intervalId = setInterval(getLastReview, 5000);
  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <div
      className="sidebar-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`sidebar ${isSidebarVisible ? "visible" : "hidden"}`}>
        <img className="sidebar-image" src={sidebarImage} alt="sidebar" />
        {lastReview && lastReview.length > 0 && (
          <div className="last-review">
            <p>{lastReview[lastReview.length - 1].review}</p>
            <p>Rating: {lastReview[lastReview.length - 1].rating}</p>
          </div>
        )}
      </div>
    </div>
  );
}
