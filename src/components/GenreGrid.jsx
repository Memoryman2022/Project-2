import React from "react";

const GenreGrid = ({ genres, onGenreSelect }) => {
  return (
    <div className="genre-grid">
      {genres.map((genre) => (
        <button
          key={genre.id}
          onClick={() => onGenreSelect(genre.id)}
          className="genre-button"
        >
          {genre.name}
          <img
            src={genre.icon}
            alt={`${genre.name} icon`}
            className="genre-icon"
          />
        </button>
      ))}
    </div>
  );
};

export default GenreGrid;
