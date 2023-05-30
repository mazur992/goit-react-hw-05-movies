import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HomeStyle } from '../components/App.styled';

import axios from 'axios';
export default function Home() {
  const [movies, setMovies] = useState(null);

  async function getMoviesTop() {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/trending/all/day',
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjM2YWJkZmM3NDE4MTQ0MTZlZDNhOWQ3OGZkMzNiNiIsInN1YiI6IjY0MzU1ZDlmZWM4YTQzMDIxOTI2NzJhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JLPbYzf2ZSUL6iP2RY-vf-bExRMCVBdbt1ajwYeenmE',
      },
    };
    return await axios
      .request(options)
      .then(function (response) {
        return response.data;
      })
      .then(function (data) {
        setMovies(data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  useEffect(() => {
    getMoviesTop();
  }, []);

  return (
    <HomeStyle>
      <h1>Trending today</h1>
      <ul>
        {movies &&
          movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`movies/${movie.id}`}>
                  {movie.title || movie.name}
                </Link>
              </li>
            );
          })}
      </ul>
    </HomeStyle>
  );
}
