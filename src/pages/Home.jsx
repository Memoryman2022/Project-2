import { useNavigate } from "react-router-dom";
import movies from "../assets/video-camera.png";
import series from "../assets/tv-monitor.png";
import soundYes from "../assets/sounds/yesmy-master.wav";

function Home() {
	const nav = useNavigate();

	const SoundClick = (selection) => {
		console.log("aca");
		const audio = new Audio(soundYes);
		audio.play();
		setTimeout(
			() => (selection == "movies" ? nav("/ListMovies") : nav("/ListSeries")),
			1500
		);
	};
	return (
		<div className="containerSelect animatedBakground">
			<h2 className="titleSelect">Select Movies or Series</h2>

			<div className="imgSelect">
				<div className="labelMovies" onClick={() => SoundClick("movies")}>
					<img src={movies} alt="Movies" />
					<label className="titleSelect"> MOVIES</label>
				</div>

				<div className="labelMovies" onClick={() => SoundClick("Series")}>
					<img src={series} alt="Series" />
					<label className="titleSelect">SERIES</label>{" "}
				</div>
			</div>
		</div>
	);
}

export default Home;
