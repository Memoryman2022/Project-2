import React from "react";
// import "./GenreGrid.css";

const GenreGrid = ({ onGenreSelect }) => {
  const genres = [
    { id: "28", name: "ACTION", icon: "src/assets/action.png" },
    { id: "12", name: "ADVENTURE", icon: "src/assets/adventure.png" },
    { id: "16", name: "ANIMATION", icon: "src/assets/animation.png" },
    { id: "35", name: "COMEDY", icon: "src/assets/cinema.png" },
    { id: "80", name: "CRIME", icon: "src/assets/crime.png" },
    { id: "99", name: "DOCUMENTARY", icon: "src/assets/documentary.png" },
    { id: "18", name: "DRAMA", icon: "src/assets/drama.png" },
    { id: "10751", name: "FAMILY", icon: "src/assets/family.png" },
    { id: "14", name: "FANTASY", icon: "src/assets/fantasy.png" },
    { id: "36", name: "HISTORY", icon: "src/assets/history.png" },
    { id: "27", name: "HORROR", icon: "src/assets/horror.png" },
    { id: "10402", name: "ROMANCE", icon: "src/assets/romance.png" },
    { id: "878", name: "SCIFI", icon: "src/assets/scifi.png" },
    { id: "53", name: "THRILLER", icon: "src/assets/thriller.png" },
    { id: "10752", name: "WAR", icon: "src/assets/war.png" },
    { id: "37", name: "WESTERN", icon: "src/assets/western.png" },
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
