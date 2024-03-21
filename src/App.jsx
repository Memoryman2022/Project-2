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
import ListSeries from "./pages/ListSeries.jsx";

import MovieSelection from "./pages/MovieSelection.jsx";
import SeriesSelection from "./pages/SeriesSelection.jsx";
//components
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ReviewForm from "./components/ReviewForm.jsx";
//css
import "./App.css";
//CONNECT
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5005";

function App() {
	return (
		<>
			<div className="App">
				<Navbar />

				<div className="main-container">
					<Routes>
						<Route path="/" element={<Welcome />} />
						<Route path="/Home" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="*" element={<NotFound />} />
						<Route
							path="/ListSeries"
							element={<ListSeries API_URL={API_URL} />}
						/>
						<Route
							path="/ListMovies"
							element={<ListMovies API_URL={API_URL} />}
						/>

						<Route path="/Review" element={<ReviewForm />} />
						<Route
							path="/MovieSelect/:id"
							element={<MovieSelection API_URL={API_URL} />}
						/>
						<Route
							path="/SerieSelect/:id"
							element={<SeriesSelection API_URL={API_URL} />}
						/>
					</Routes>
				</div>
				<Footer />
			</div>
		</>
	);
}

export default App;
