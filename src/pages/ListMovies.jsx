import { useState, useEffect } from "react";

import axios from "axios";
import CarouselImg from "../components/CarouselImg";
import { Link } from "react-router-dom";
import GenreGrid from "../components/GenreGrid";

export default function ListMovies({ API_URL }) {
  const [moviesList, setMoviesList] = useState([]);

  const [genre, setGenre] = useState("");

  const endPoint = `${API_URL}/movies`;

  useEffect(() => {
    axios
      .get(endPoint)
      .then((res) => {
        setMoviesList(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const genres = [
    { id: "28", name: "ACTION", icon: "/action.png" },
    { id: "12", name: "ADVENTURE", icon: "/adventure.png" },
    { id: "16", name: "ANIMATION", icon: "/animation.png" },
    { id: "35", name: "COMEDY", icon: "/cinema.png" },
    { id: "80", name: "CRIME", icon: "/crime.png" },
    { id: "99", name: "DOCUMENTARY", icon: "/documentary.png" },
    { id: "18", name: "DRAMA", icon: "/drama.png" },
    { id: "10751", name: "FAMILY", icon: "/family.png" },
    { id: "14", name: "FANTASY", icon: "/fantasy.png" },
    { id: "36", name: "HISTORY", icon: "/history.png" },
    { id: "27", name: "HORROR", icon: "/horror.png" },
    { id: "10402", name: "ROMANCE", icon: "/romance.png" },
    { id: "878", name: "SCIFI", icon: "/scifi.png" },
    { id: "53", name: "THRILLER", icon: "/thriller.png" },
    { id: "10752", name: "WAR", icon: "/war.png" },
    { id: "37", name: "WESTERN", icon: "/western.png" },
  ];

  const genderSelection =
    genre == ""
      ? ""
      : moviesList.filter(
          (ele) => ele.genre_ids.includes(Number(genre)) == true
        );

  return (
    <>
      <section className="total-movies animatedBakground">
        {genre == "" ? <CarouselImg endPoint={endPoint} /> : null}

        {genre === "" && (
          <div className="genre-div">
            <h5>
              <strong>SELECT A GENRE</strong>
            </h5>
            <GenreGrid genres={genres} onGenreSelect={setGenre} />
          </div>
        )}
        <div className="resultMovies">
          {genderSelection == ""
            ? null
            : genderSelection.map((movie, i) => {
                if (i < 20) {
                  return (
                    <Link to={`/MovieSelect/${movie.id}`} key={movie.id}>
                      <div className="movieCard">
                        <h6>{movie.title}</h6>
                        <img
                          className="imgDetail"
                          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                          width={"100px"}
                        />
                      </div>
                    </Link>
                  );
                }
              })}
        </div>
      </section>
    </>
  );
}
