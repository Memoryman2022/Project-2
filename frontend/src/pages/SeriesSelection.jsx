import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const SeriesSelection = () => {
	const { id } = useParams();
	const [serie, setSerie] = useState();
	const [loading, setLoading] = useState(true);
	const [review, setReview] = useState("");

	const [name, setName] = useState("");
	const [genre_ids, setGenre_ids] = useState("");
	const [original_language, setOriginal_language] = useState("");
	const [overview, setOverview] = useState("");
	const [poster_path, setPoster_path] = useState("");
	const [first_air_date, setFirst_air_date] = useState("");

	const nav = useNavigate();

	useEffect(() => {
		const url = "http://localhost:5005/Series";
		const getMovies = async () => {
			try {
				const res = await axios.get(url);

				console.log(res);
				setSerie(res.data);

				res.data.forEach((ele, i) => {
					if (ele.id == id) {
						setName(ele.title);
						setGenre_ids(ele.genre_ids);
						setOriginal_language(ele.original_language);
						setOverview(ele.overview);
						setPoster_path(ele.poster_path);
						setFirst_air_date(ele.first_air_date);
					}
				});

				setLoading(false);
			} catch (err) {
				console.log(err);
			}
		};
		getMovies();
	}, [id]);

	const handleSubmitNewReview = (e) => {
		e.preventDefault();

		const newReview = {
			genre_ids,
			id,
			original_language,
			overview,
			poster_path,
			name,
			first_air_date,
			review,
		};
		console.log(newReview);
		const url = "http://localhost:5005";
		axios
			.post(`${url}/Reviews`, newReview)
			.then((res) => {
				console.log(res);
				nav("/");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	if (loading) {
		return <div>loading...</div>;
	} else {
		console.log(serie);
		const newMovie = serie.filter((ele) => ele.id == id);
		console.log(newMovie);
		return (
			<section className="movieSelection animatedBakground">
				<img
					className="imgMovieSelection"
					src={`https://image.tmdb.org/t/p/w500/${newMovie[0].poster_path}`}
					width={"100px"}
				/>
				<h2> Title: {newMovie[0].title}</h2>
				<h2> Original language: {newMovie[0].original_language}</h2>
				<p> Overview: {newMovie[0].overview}</p>
				<div className="containerForm">
					<form
						onSubmit={handleSubmitNewReview}
						className="submit-new-review-form"
					>
						<label>
							ADD REVIEW
							<textarea
								name="review"
								placeholder="WRITE HERE..."
								value={review}
								onChange={(event) => {
									setReview(event.target.value);
								}}
								rows={8}
								cols={50}
							/>
						</label>

						<div className="form-buttons-div">
							<button className="submit-review-btn-form" type="submit">
								SUBMIT REVIEW
							</button>
							<Link to="/">
								<button className="submit-review-btn-form">
									BACK TO THE FOYER
								</button>
							</Link>
						</div>
					</form>
				</div>
			</section>
		);
	}
};

export default SeriesSelection;
