import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="welcome-container">
      <div className="welcome-div">
        <h2>Welcome Page</h2>
        <form>
          <label>
            <input type="text" name="name" placeholder="NAME" />
          </label>
          <label>
            <input type="text" password="password" placeholder="PASSWORD" />
          </label>
          <div className="login-buttons">
            <button className="login-button" type="submit">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Welcome;
