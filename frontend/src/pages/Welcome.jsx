import React from "react";
import { Link } from "react-router-dom";
import focusImage from "../assets/welcomeGif.gif";
import { useState } from "react";
import { useEffect } from "react";

function Welcome() {
  const [showLogin, setShowLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Login:", formData);
    setFormData({
      name: "",
      password: "",
    });
  };

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setShowLogin(true);
    }, 3750);
    return () => clearTimeout(animationTimeout);
  }, []);

  return (
    <div className="welcome-container">
      <img className="logo-image" src={focusImage} alt="Focus" />
      {showLogin ? (
        <div className="welcome-div">
          <h2>LOGIN</h2>
          <form onSubmit={handleLogin}>
            <label>
              <input
                type="text"
                name="name"
                placeholder="NAME"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <label>
              <input
                type="password"
                name="password"
                placeholder="PASSWORD"
                value={formData.password}
                onChange={handleChange}
              />
            </label>
            <div className="login-buttons-div">
              <button className="login-button" type="submit">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
export default Welcome;
