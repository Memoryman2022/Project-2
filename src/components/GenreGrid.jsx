import React from "react";
// import "./GenreGrid.css";

const GenreGrid = ({ onGenreSelect }) => {
  const genres = [
    { id: "28", name: "ACTION" },
    { id: "12", name: "ADVENTURE" },
    { id: "16", name: "ANIMATION" },
    { id: "35", name: "COMEDY" },
    { id: "80", name: "CRIME" },
    { id: "99", name: "DOCUMENTARY" },
    { id: "18", name: "DRAMA" },
    { id: "10751", name: "FAMILY" },
    { id: "14", name: "FANTASY" },
    { id: "36", name: "HISTORY" },
    { id: "27", name: "HORROR" },
    { id: "10402", name: "ROMANCE" },
    { id: "878", name: "SCIFI" },
    { id: "53", name: "THRILLER" },
    { id: "10752", name: "WAR" },
    { id: "37", name: "WESTERN" },
  ];

  return (
    <div className="genre-grid">
      {genres.map((genre) => (
        <button
          key={genre.id}
          onClick={() => onGenreSelect(genre.id)}
          className="genre-button"
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
};

export default GenreGrid;
