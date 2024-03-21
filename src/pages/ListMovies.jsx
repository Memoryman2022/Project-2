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
            <GenreGrid onGenreSelect={setGenre} />
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
