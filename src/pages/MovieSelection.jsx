import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import DeleteReview from "../components/Delete.jsx";

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

  //REVIEWS
  const [reviews, setReviews] = useState([]);

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
      movieId: id,
      original_language,
      overview,
      poster_path,
      title,
      review,
    };
    console.log(newReview);
    const url = API_URL;
    axios
      .post(`${url}/reviews`, newReview)
      .then((res) => {
        getLastReview();
        setReview("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //REVIEWS
  //get review
  const getLastReview = () => {
    axios
      .get(`${API_URL}/reviews?movieId=${id}`)
      .then((res) => {
        setReviews(res.data);
        console.log(res);
      })
      .catch((error) => {
        console.error("Error fetching review:", error);
      });
  };

  useEffect(() => {
    getLastReview();
  }, [id]);

  if (loading) {
    return <div>loading...</div>;
  } else {
    const newMovie = movie.filter((ele) => ele.id == id);
    return (
      <section className="movieSelection-animatedBakground">
        <div className="selected-movie-and-review-form">
          <img
            className="imgMovieSelection"
            src={`https://image.tmdb.org/t/p/w500/${newMovie[0].backdrop_path}`}
            width={"100px"}
          />
          <h2> {newMovie[0].title}</h2>
          {/* <h2> Original language: {newMovie[0].original_language}</h2> */}
          <p> Overview: {newMovie[0].overview}</p>
          <div className="containerForm">
            <form
              onSubmit={handleSubmitNewReview}
              className="submit-new-review-form"
            >
              <label>
                ADD REVIEW
                <textarea
                  className="review-textarea"
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
        </div>
        <div className="movie-review-div">
          <h4>
            <strong>REVIEWS</strong>
          </h4>
          {reviews.map((reviewItem, index) => (
            <div className="review-item" key={index}>
              <p>"{reviewItem.review}"</p>
              <DeleteReview
                reviewId={reviewItem.id}
                onDelete={(deletedReviewId) =>
                  setReviews(
                    reviews.filter((review) => review.id !== deletedReviewId)
                  )
                }
              />
            </div>
          ))}
        </div>
      </section>
    );
  }
};

export default MovieSelection;
