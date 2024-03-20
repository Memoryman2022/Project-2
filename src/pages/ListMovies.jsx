import { useState, useEffect } from "react";

import axios from "axios";
import CarouselImg from "../components/CarouselImg";
import { Link } from "react-router-dom";

export default function ListMovies({ API_URL }) {
	const [moviesList, setMoviesList] = useState([]);

	const [genre, setGenre] = useState("");

	const endPoint = `${API_URL}/movies`;
	/*const apiKey = "3d0dbaba1ed955f27af66d0c59898ec2";
	const tokenApi =
		"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDBkYmFiYTFlZDk1NWYyN2FmNjZkMGM1OTg5OGVjMiIsInN1YiI6IjY1ZjFjZDc0NDcwZWFkMDE2MjljNmZjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9uzeZ1bJ9uNWBN-WlFCksLUIOXR9mIeF_IMcr0IczAQ";
*/
	useEffect(() => {
		/*const endPoint =
			"https://api.themoviedb.org/3/trending/movie/week?language=en-US";
		axios.defaults.headers.common["Authorization"] = "Bearer " + tokenApi;
		axios
			.get(endPoint)
			.then((res) => {
				const apiData = res.data.results;
				setMoviesList(apiData.sort((a, b) => b.vote_average - a.vote_average));
				setLoading(false);
				setImgCar(apiData.map((img) => img.poster_path));
			})
			.catch((err) => {
				console.error(err);
			});*/

		axios
			.get(endPoint)
			.then((res) => {
				setMoviesList(res.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	const genderSelection =
		genre == ""
			? ""
			: moviesList.filter(
					(ele) => ele.genre_ids.includes(Number(genre)) == true
			  );

	return (
		<>
			<section className="total-movies animatedBakground">
				{genre == "" ? <CarouselImg endPoint={endPoint} /> : null}
				<h2>Select </h2>
				<form action="">
					<label>
						Genre
						<select
							name="genre"
							value={genre}
							onChange={(e) => setGenre(e.target.value)}
						>
							<option value="">-- None --</option>
							<option value="28">Action</option>
							<option value="12">Adventure</option>
							<option value="16">Animation</option>
							<option value="35">Comedy </option>
							<option value="80">Crime</option>
							<option value="99">Documentary</option>
							<option value="18">Drama</option>
							<option value="10751">Family</option>
							<option value="14">Fantasy</option>
							<option value="36">History</option>
							<option value="27">Horror</option>
							<option value="10402">Romance</option>
							<option value="878">Scifi</option>
							<option value="53">Thriller</option>
							<option value="10752">War</option>
							<option value="37">Western</option>
						</select>
					</label>
				</form>
				<div className="resultMovies">
					{genderSelection == ""
						? null
						: genderSelection.map((movie, i) => {
								if (i < 20) {
									return (
										<Link to={`/MovieSelect/${movie.id}`} key={movie.id}>
											<div className="movieCard">
												<h6>{movie.title}</h6>
												<img
													className="imgDetail"
													src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
													width={"100px"}
												/>
											</div>
										</Link>
									);
								}
						  })}
				</div>
			</section>
		</>
	);
}
