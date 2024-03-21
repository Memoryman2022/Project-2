import { Link, useNavigate } from "react-router-dom";
import React from "react";
import logo from "../assets/FocusLogo_icon.png";
export default function Navbar() {
	const navigate = useNavigate();

	return (
		<nav>
			<Link to="/Home">
				<img className="nav-logo" src={logo} alt="image-logo" />
			</Link>
			<ul className="navbar-list">
				<li className="navbar-item">
					<Link to="/Home">
						<h5>HOME</h5>
					</Link>
				</li>
				<li className="navbar-item">
					<Link to="/about">
						<h5>ABOUT</h5>
					</Link>
				</li>
			</ul>
		</nav>
	);
}
