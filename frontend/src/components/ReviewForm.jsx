import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NewReviewForm = ({ addReview, reviews, setReviews, reviewData }) => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");
  const nav = useNavigate();

  const handleSubmitNewReview = (e) => {
    e.preventDefault();

    if (!name || !genre || !image || !rating) {
      alert("Please fill in all fields.");
      return;
    }

    const newReview = {
      name,
      genre,
      image,
      rating,
      id: reviews.length + 1,
    };

    setReviews([newReview, ...reviews]);
    setName("");
    setGenre("");
    setImage("");
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
          ADD IMAGE:
          <input
            type="url"
            name="image"
            placeholder="IMAGE URL"
            value={image}
            onChange={(event) => {
              setImage(event.target.value);
            }}
          />
        </label>
        <label>
          RATING:
          <input
            type="number"
            name="rating"
            placeholder="RATING"
            value={rating}
            onChange={(event) => {
              setRating(event.target.value);
            }}
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
  );
};

export default NewReviewForm;
