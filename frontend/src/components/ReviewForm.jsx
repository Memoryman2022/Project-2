import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import StarRating from "./StarRating.jsx";
import axios from "axios";

const NewReviewForm = () => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [randomFilm, setRandomFilm] = useState(null);

  const nav = useNavigate();

  //get film
  useEffect(() => {
    axios
      .get("http://localhost:5005/movies")
      .then((res) => {
        const randomIndex = Math.floor(Math.random() * res.data.length);
        const randomFilm = res.data[randomIndex];
        setRandomFilm(randomFilm);
      })
      .catch((error) => {
        console.log("error getting film", error);
      });
  }, []);

  //post review
  const handleSubmitNewReview = (e) => {
    e.preventDefault();
    console.log("is this it?", randomFilm);
    if (!randomFilm) {
      console.error("No random film selected.");
      return;
    }

    const newReview = {
      review,
      rating,
      itemId: randomFilm.id,
    };

    axios
      .post("http://localhost:5005/reviews", newReview)
      .then((res) => {
        console.log("Review submitted successfully:", res.data);
        nav("/movies");
      })
      .catch((error) => {
        console.error("Error submitting review:", error);
      });

    // if (!review || !rating) {
    //   alert("fill in all fields.");
    //   return;
    // }

    setReview("");
    setRating(0);
  };

  return (
    <div className="new-review-div">
      <div className="form-header">
        <h2 className="text-form">Share your own review below:</h2>
      </div>

      <form onSubmit={handleSubmitNewReview} className="submit-new-review-form">
        {randomFilm && (
          <div>
            <h3>FILM: {randomFilm.title}</h3>
            <img src={`${randomFilm.poster_path}`} alt={randomFilm.title} />
          </div>
        )}

        <label>
          ADD REVIEW:
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
        <label>
          RATING:
          <StarRating value={rating} onChange={setRating} />
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
  );
};

export default NewReviewForm;
