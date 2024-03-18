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
import ListMovies from "./pages/ListMovies.jsx";
//components
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import ReviewForm from "./components/ReviewForm.jsx";
//css
import "./App.css";
import Select from "./pages/Select.jsx";

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
            <Route path="/ListMovies" element={<ListMovies />} />
            <Route path="/Select" element={<Select />} />
            <Route path="/ReviewForm" element={<ReviewForm />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
