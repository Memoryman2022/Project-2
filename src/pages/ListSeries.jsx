import { useState, useEffect, useRef } from "react";

import axios from "axios";
import CarouselImg from "../components/CarouselImg";
import { Link } from "react-router-dom";

export default function ListSeries() {
	const [seriesList, setSeriesList] = useState([]);

	const [genre, setGenre] = useState("");

	const endPoint = "http://localhost:5005/series";

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
				setSeriesList(res.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	const genderSelection =
		genre == ""
			? ""
			: seriesList.filter(
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
							<option value="10759">Action & Adventure</option>
							<option value="16">Animation</option>
							<option value="35">Comedy </option>
							<option value="80">Crime</option>
							<option value="99">Documentary</option>
							<option value="18">Drama</option>
							<option value="10751">Family</option>
							<option value="10762">Kids</option>
							<option value="9648">Mystery</option>
							<option value="10763">News</option>
							<option value="10764">Reality</option>
							<option value="10765">Scifi & Fantasy</option>
							<option value="10766">Soap</option>
							<option value="10768">War & Politics</option>
							<option value="37">Western</option>
						</select>
					</label>
				</form>
				<div className="resultMovies">
					{genderSelection == ""
						? null
						: genderSelection.map((movie, i) => {
								console.log(movie);
								if (i < 20) {
									return (
										<Link to={`/SerieSelect/${movie.id}`} key={movie.id}>
											<div key={movie.id} className="movieCard">
												<h6>{movie.name}</h6>
												<img
													className="imgDetail"
													src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
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
