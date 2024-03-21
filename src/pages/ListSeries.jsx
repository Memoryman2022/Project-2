import { useState, useEffect } from "react";

import axios from "axios";
import CarouselImg from "../components/CarouselImg";
import { Link } from "react-router-dom";

import GenreGrid from "../components/GenreGrid";

export default function ListSeries({ API_URL }) {
  const [seriesList, setSeriesList] = useState([]);

  const [genre, setGenre] = useState("");

  const endPoint = `${API_URL}/series`;

  useEffect(() => {
    axios
      .get(endPoint)
      .then((res) => {
        setSeriesList(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [API_URL]);

  const seriesGenres = [
    { id: "10759", name: "ACTION/ADVENTURE", icon: "/action.png" },
    { id: "16", name: "ANIMATION", icon: "/animation.png" },
    { id: "35", name: "COMEDY", icon: "/cinema.png" },
    { id: "80", name: "CRIME", icon: "/crime.png" },
    { id: "99", name: "DOCUMENTARY", icon: "/documentary.png" },
    { id: "18", name: "DRAMA", icon: "/drama.png" },
    { id: "10751", name: "FAMILY", icon: "/family.png" },
    { id: "10762", name: "KIDS", icon: "/kids.png" },
    { id: "9648", name: "MYSTERY", icon: "/mystery.png" },
    { id: "10763", name: "NEWS", icon: "/news.png" },
    { id: "10764", name: "REALITY", icon: "/reality.png" },
    { id: "10765", name: "SCIFI/FANTASY", icon: "/scifi.png" },
    { id: "10766", name: "SOAP", icon: "/soap.png" },
    { id: "10768", name: "WAR/POLITICS", icon: "/war.png" },
    { id: "37", name: "WESTERN", icon: "/western.png" },
  ];
  const genderSelection =
    genre == ""
      ? ""
      : seriesList.filter(
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
            <GenreGrid genres={seriesGenres} onGenreSelect={setGenre} />
          </div>
        )}
        <div className="resultMovies">
          {genderSelection == ""
            ? null
            : genderSelection.map((series, i) => {
                if (i < 20) {
                  return (
                    <Link to={`/SerieSelect/${series.id}`} key={series.id}>
                      <div key={series.id} className="movieCard">
                        <h6>{series.name}</h6>
                        <img
                          className="imgDetail"
                          src={`https://image.tmdb.org/t/p/w500/${series.poster_path}`}
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
