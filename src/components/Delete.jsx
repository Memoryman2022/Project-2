import React from "react";
import axios from "axios";

const DeleteReview = ({ API_URL, reviewId, onDelete }) => {
  const handleDelete = () => {
    axios
      .delete(`${API_URL}/reviews/${reviewId}`)
      .then(() => {
        onDelete(reviewId);
        console.log("Review deleted");
      })
      .catch((error) => {
        console.error("Error deleting:", error);
      });
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteReview;
