import { Link } from "react-router-dom";
import movies from "../assets/video-camera.png";
import series from "../assets/tv-monitor.png";

function Home() {
  return (
    <div className="containerSelect animatedBakground">
      <h2 className="titleSelect">Select Movies or Series</h2>

      <div className="imgSelect">
        <Link to="/ListMovies">
          <div className="labelMovies">
            <img src={movies} alt="Movies" />
            <label className="titleSelect"> MOVIES</label>
          </div>
        </Link>
        <Link to="/ListSeries">
          <div className="labelMovies">
            <img src={series} alt="Series" />
            <label className="titleSelect">SERIES</label>{" "}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
