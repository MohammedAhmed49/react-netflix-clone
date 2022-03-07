import './Banner.css';
import axios from '../../axios';
import { useEffect, useState } from 'react';
import requests from '../../requests';

export default function Banner() {

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const res = await axios.get(requests.fetchNetflixOriginals);
      setMovie(res.data.results[Math.floor(Math.random() * res.data.results.length - 1)]);
      return res;
    }

    getMovies();
  }, []);

  const truncateDesc = (desc, n) => {
    return desc?.length > n ? desc.substr(0, n) + '...' : desc
  }

  const desc = 'This is test description This is test description This is test description This is test description This is test description This is test description This is test description This is test description This is test description This is test description This is test description This is test description';

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">{movie.name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncateDesc(movie?.overview, 100)}
        </h1>
      </div>

      <div className="banner--fadeBottom"></div>
    </header>
  );
}
