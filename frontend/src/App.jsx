import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/react.svg";
//pages
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
//components
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
//css
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="main-container">
          <Sidebar />
          <Routes>
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
