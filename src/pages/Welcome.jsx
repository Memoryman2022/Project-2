import { useState } from "react";
import focusGif from "../assets/welcomeGif.gif";
import focusImage from "../assets/logoImage.png";

import soundInic from "../assets/sounds/intro.wav";
import { useNavigate } from "react-router-dom";


function Welcome() {
	const [showGif, setShowGif] = useState(false);
	const [showLogin, setShowLogin] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		password: "",
	});

	const nav = useNavigate();

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
		nav("/Home");
	};

	const handleGifLoad = () => {
		const audio = new Audio(soundInic);
		audio.play();
		setTimeout(() => {
			setShowGif(false);
			setShowLogin(true);
		}, 3550);
	};

	const enterPage = () => {
		setShowGif(true);
	};


	return (
		<div className="welcome-container" onClick={enterPage}>
			{!showGif & !showLogin ? <h1>Click to Continue</h1> : null}
			<div className="content">
				<img className="welcome-logo" src={focusImage} alt="logo" />
				{showLogin && (
					<div className="welcome-div">
						<h3>
							<strong>LOGIN</strong>
						</h3>
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
									<strong>SUBMIT</strong>
								</button>
							</div>
						</form>
					</div>
				)}
			</div>
			{showGif && (
				<div className="overlay">
					<img
						className="overlay-image"
						src={focusGif}
						alt="Focus"
						onLoad={handleGifLoad}
						autoPlay
					/>
				</div>
			)}
		</div>
	);

}

export default Welcome;
