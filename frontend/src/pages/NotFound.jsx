import React from "react";
import { Link } from "react-router-dom";
import cutImage from "../assets/video-editing.png";

function NotFound() {
  return (
    <div className="notFound-container">
      <img className="cut-image" src={cutImage} alt="cut" />
      <h2>CUT!!!</h2>
      <br />
      <h3>Not Found</h3>
      <br />
      <p>Lets try that again, shall we?</p>
    </div>
  );
}

export default NotFound;
