import { useState, useEffect, useRef } from "react";

import axios from "axios";

export default function ListSeries() {
	let token = sessionStorage.getItem("token");

	const [seriesList, setSeriesList] = useState([]);
	const [loading, setLoading] = useState(true);
	const [imgCar, setImgCar] = useState([]);
	const [genre, setGenre] = useState("");

	const [activeIndex, setActiveIndex] = useState(0);

	const apiKey = "3d0dbaba1ed955f27af66d0c59898ec2";
	const tokenApi =
		"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDBkYmFiYTFlZDk1NWYyN2FmNjZkMGM1OTg5OGVjMiIsInN1YiI6IjY1ZjFjZDc0NDcwZWFkMDE2MjljNmZjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9uzeZ1bJ9uNWBN-WlFCksLUIOXR9mIeF_IMcr0IczAQ";

	useEffect(() => {
		const endPoint =
			"https://api.themoviedb.org/3/trending/tv/week?language=en-US";
		axios.defaults.headers.common["Authorization"] = "Bearer " + tokenApi;
		axios
			.get(endPoint)
			.then((res) => {
				const apiData = res.data.results;
				setSeriesList(apiData.sort((a, b) => b.vote_average - a.vote_average));
				setLoading(false);
				setImgCar(apiData.map((img) => img.poster_path));
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setActiveIndex((prevIndex) => (prevIndex + 1) % imgCar.length);
		}, 7000);
		return () => clearInterval(intervalId);
	}, [imgCar]);

	useEffect(() => {
		const endPoint = `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&page=1&sort_by=revenue.asc&with_genres=${genre}`;
		axios.defaults.headers.common["Authorization"] = "Bearer " + tokenApi;
		axios
			.get(endPoint)
			.then((res) => {
				const apiData = res.data.results;
				setSeriesList(apiData.sort((a, b) => b.vote_average - a.vote_average));
				setLoading(false);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [genre]);

	console.log(seriesList);

	function DraggableItem({ data, handleDragging }) {
		const handleDragStart = (e) => {
			e.dataTransfer.setData("text", `${data.id}`);
			handleDragging(true);
		};

		return (
			<div draggable onDragStart={handleDragStart}>
				<p>holla</p>
				<p>Hi</p>
			</div>
		);
	}

	// Componente para los contenedores donde se pueden soltar los elementos
	function DropContainer({ items, handleUpdateList, handleDragging }) {
		const handleDrop = (e) => {
			e.preventDefault();
			const id = +e.dataTransfer.getData("text");
			handleUpdateList(id);
			handleDragging(false);
		};

		const handleDragOver = (e) => e.preventDefault();

		return (
			<div onDrop={handleDrop} onDragOver={handleDragOver}>
				{items.map((item) => (
					<DraggableItem
						key={item.id}
						data={item}
						handleDragging={handleDragging}
					/>
				))}
			</div>
		);
	}

	return (
		<>
			<DraggableItem />
			<DropContainer />

			<section className="total-movies animatedBakground">
				{genre == "" ? (
					<div className="imgCar">
						{imgCar.map((slide, index) => {
							return (
								<img
									key={index}
									style={{ display: index === activeIndex ? "block" : "none" }}
									src={`https://image.tmdb.org/t/p/w500/${slide}`}
								/>
							);
						})}
					</div>
				) : null}
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
					{genre == ""
						? null
						: seriesList.map((movie) => {
								return (
									<div key={movie.id} className="movieCard">
										<h6>{movie.title}</h6>
										<img
											className="imgDetail"
											src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
											width={"100px"}
										/>
									</div>
								);
						  })}
				</div>
			</section>
		</>
	);
}
