import { useState, useEffect } from "react";

import axios from "axios";

export default function ListMovies() {
  let token = sessionStorage.getItem("token");

  const [moviesList, setMoviesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imgCar, setImgCar] = useState([]);
  const [gender, setGender] = useState("");

  const [activeIndex, setActiveIndex] = useState(0);

  const apiKey = "3d0dbaba1ed955f27af66d0c59898ec2";
  const tokenApi =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDBkYmFiYTFlZDk1NWYyN2FmNjZkMGM1OTg5OGVjMiIsInN1YiI6IjY1ZjFjZDc0NDcwZWFkMDE2MjljNmZjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9uzeZ1bJ9uNWBN-WlFCksLUIOXR9mIeF_IMcr0IczAQ";

  useEffect(() => {
    const endPoint =
      "https://api.themoviedb.org/3/trending/movie/week?language=en-US";
    axios.defaults.headers.common["Authorization"] = "Bearer " + tokenApi;
    axios
      .get(endPoint)
      .then((res) => {
        const apiData = res.data.results;
        setMoviesList(apiData.sort((a, b) => b.vote_average - a.vote_average));
        setLoading(false);
        setImgCar(apiData.map((img) => img.poster_path));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % imgCar.length);
    }, 7000);
    return () => clearInterval(intervalId);
  }, [imgCar]);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=revenue.asc&with_genres=${gender}`;
    axios.defaults.headers.common["Authorization"] = "Bearer " + tokenApi;
    axios
      .get(endPoint)
      .then((res) => {
        const apiData = res.data.results;
        setMoviesList(apiData.sort((a, b) => b.vote_average - a.vote_average));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [gender]);

  console.log(moviesList);

  return (
    <>
      <section className="total-movies animatedBakground">
        <div className="imgCar">
          {imgCar.map((slide, index) => {
            return (
              <img
                key={index}
                style={{ display: index === activeIndex ? "block" : "none" }}
                src={`https://image.tmdb.org/t/p/w500/${slide}`}
              />
            );
          })}
        </div>
        <h2>Select </h2>
        <form action="">
          <label>
            GENRE
            <select
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">-- None --</option>
              <option value="28">Action</option>
              <option value="12">Adventure</option>
              <option value="16">Animation</option>
              <option value="35">Comedy </option>
              <option value="80">Crime</option>
              <option value="99">Documentary</option>
              <option value="18">Drama</option>
              <option value="10751">Family</option>
              <option value="14">Fantasy</option>
              <option value="36">History</option>
              <option value="27">Horror</option>
              <option value="10402">Romance</option>
              <option value="878">Scifi</option>
              <option value="53">Thriller</option>
              <option value="10752">War</option>
              <option value="37">Western</option>
            </select>
          </label>
        </form>
        <div className="resultMovies">
          {gender == ""
            ? null
            : moviesList.map((movie) => {
                return (
                  <div key={movie.id} className="movieCard">
                    <h5>{movie.title}</h5>
                    <img
                      className="imgDetail"
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      width={"100px"}
                    />
                  </div>
                );
              })}
        </div>
      </section>
    </>
  );
}
