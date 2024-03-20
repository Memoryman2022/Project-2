import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const MovieSelection = ({ API_URL }) => {
	const { id } = useParams();
	const [movie, setMovie] = useState();
	const [loading, setLoading] = useState(true);
	const [review, setReview] = useState("");

	const [title, setTitle] = useState("");
	const [genre_ids, setGenre_ids] = useState("");
	const [original_language, setOriginal_language] = useState("");
	const [overview, setOverview] = useState("");
	const [poster_path, setPoster_path] = useState("");

	const nav = useNavigate();

	useEffect(() => {
		const url = `${API_URL}/movies`;
		const getMovies = async () => {
			try {
				const res = await axios.get(url);

				console.log(res);
				setMovie(res.data);

				res.data.forEach((ele, i) => {
					if (ele.id == id) {
						setTitle(ele.title);
						setGenre_ids(ele.genre_ids);
						setOriginal_language(ele.original_language);
						setOverview(ele.overview);
						setPoster_path(ele.poster_path);
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
			title,
			review,
		};
		console.log(newReview);
		const url = API_URL;
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
		const newMovie = movie.filter((ele) => ele.id == id);
		return (
			<section className="movieSelection animatedBakground">
				<img
					className="imgMovieSelection"
					src={`https://image.tmdb.org/t/p/w500/${newMovie[0].backdrop_path}`}
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

export default MovieSelection;
