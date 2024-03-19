import React, { useState } from "react";

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

export default StarRating;
