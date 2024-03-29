import axios from "axios";

const DeleteReview = ({ API_URL, reviewId, onDelete }) => {

  console.log(API_URL, reviewId, onDelete);
  const handleDelete = () => {
    console.log(API_URL, reviewId, onDelete);
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


	return (
		<button className="delete-btn" onClick={handleDelete}>
			DELETE
		</button>
	);
};

export default DeleteReview;
