import { Outlet, Link, useSearchParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';

export default function Movies() {
  const locationMovies = useLocation();
  const [moviesSearch, setMoviesSearch] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchMovie = searchParams.get('search');
  const onSubmit = data => {
    data !== '' ? setSearchParams({ search: data }) : setSearchParams({});
  };
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie',
      params: {
        query: `${searchMovie}`,
        include_adult: 'false',
        language: 'en-US',
        page: '1',
      },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjM2YWJkZmM3NDE4MTQ0MTZlZDNhOWQ3OGZkMzNiNiIsInN1YiI6IjY0MzU1ZDlmZWM4YTQzMDIxOTI2NzJhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JLPbYzf2ZSUL6iP2RY-vf-bExRMCVBdbt1ajwYeenmE',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        return response.data;
      })
      .then(function (data) {
        setMoviesSearch(data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [searchMovie]);

  return (
    <div>
      <Searchbar onSubmit={onSubmit}></Searchbar>
      <ul>
        {searchMovie &&
          moviesSearch &&
          moviesSearch.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`${movie.id}`} state={{ from: locationMovies }}>
                  {movie.title}
                </Link>
              </li>
            );
          })}
      </ul>
      <Outlet />
    </div>
  );
}
