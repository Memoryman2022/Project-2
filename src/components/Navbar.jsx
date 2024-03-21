import { Link, useNavigate } from "react-router-dom";
import React from "react";
import logo from "../assets/FocusLogo_icon.png";
export default function Navbar() {
	const navigate = useNavigate();

	return (
		<nav>
			<img className="nav-logo" src={logo} alt="image-logo" />
			<ul className="navbar-list">
				<li className="navbar-item">
					<Link to="/">WELCOME</Link>
				</li>
				<li className="navbar-item">
					<Link to="/Home">HOME</Link>
				</li>
				<li className="navbar-item">
					<Link to="/about">ABOUT</Link>
				</li>
			</ul>
		</nav>
	);
}
