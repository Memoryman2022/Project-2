import { Link } from "react-router-dom";
import movies from "../assets/movies.png";
import series from "../assets/series.jpg";
import ListMovies from "./ListMovies";

const Select = () => {
	return (
		<div className="containerSelect animatedBakground">
			<h2 className="titleSelect">Select Movies or Series</h2>

			<div className="imgSelect">
				<Link to="/ListMovies">
					<div className="labelMovies">
						<img src={movies} alt="Movies" />
						<label className="titleSelect"> MOVIES</label>
					</div>
				</Link>
				<div className="labelMovies">
					<img src={series} alt="Series" />
					<label className="titleSelect">SERIES</label>{" "}
				</div>
			</div>
		</div>
	);
};

export default Select;
