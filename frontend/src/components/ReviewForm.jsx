import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import StarRating from "./StarRating.jsx";

const NewReviewForm = ({
  addReview,
  reviews,
  setReviews,
  reviewData,
  itemId,
}) => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const nav = useNavigate();

  const handleSubmitNewReview = (e) => {
    e.preventDefault();

    if (!review || !rating) {
      alert("Please fill in all fields.");
      return;
    }

    const newReview = {
      review,
      rating,
      itemId,
      id: reviews.length + 1,
    };

    setReviews([newReview, ...reviews]);

    setReview("");
    setRating(0);

    nav("/");
    console.log(reviews);
  };

  return (
    <div className="new-review-div">
      <div className="form-header">
        <h2 className="text-form">Share your own review below:</h2>
      </div>

      <form onSubmit={handleSubmitNewReview} className="submit-new-review-form">
        {/* <h3>{reviewData.title}</h3> */}

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
