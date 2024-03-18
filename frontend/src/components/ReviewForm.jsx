import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const StarRating = ({ value, onChange }) => {
  const [hoverValue, setHoverValue] = useState(null);

  const handleStarHover = (index) => {
    setHoverValue(index);
  };

  const handleStarClick = (index) => {
    onChange(index);
  };

  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div>
      {stars.map((index) => (
        <span
          key={index}
          className={
            index <= (hoverValue || value) ? "star-filled" : "star-empty"
          }
          onMouseEnter={() => handleStarHover(index)}
          onMouseLeave={() => setHoverValue(null)}
          onClick={() => handleStarClick(index)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const NewReviewForm = ({ addReview, reviews, setReviews, reviewData }) => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const nav = useNavigate();

  const handleSubmitNewReview = (e) => {
    e.preventDefault();

    if (!name || !genre || !review || !rating) {
      alert("Please fill in all fields.");
      return;
    }

    const newReview = {
      name,
      genre,
      review,
      rating,
      id: reviews.length + 1,
    };

    setReviews([newReview, ...reviews]);
    setName("");
    setGenre("");
    setReview("");
    setRating("");

    nav("/");
    console.log(reviews);
  };

  return (
    <div className="new-review-div">
      <div className="form-header">
        <h2 className="text-form">Share your own review below:</h2>
      </div>

      <form onSubmit={handleSubmitNewReview} className="submit-new-review-form">
        <label>
          FILM:
          <input
            type="text"
            name="name"
            placeholder="FILM NAME"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </label>
        <label>
          GENRE:
          <input
            type="text"
            name="Genre"
            placeholder="GENRE"
            value={genre}
            onChange={(event) => {
              setGenre(event.target.value);
            }}
          />
        </label>
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
