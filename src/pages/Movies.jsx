import { Outlet, Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';

export default function Movies() {
  const [search, setSearch] = useState('');
  const [moviesSearch, setMoviesSearch] = useState(null);
  const onSubmit = data => {
    setSearch(data);
  };
  useEffect(() => {
    console.log(search);
  }, [search]);
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/movie',
    params: {
      query: `${search}`,
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
  return (
    <div>
      <Searchbar onSubmit={onSubmit}></Searchbar>
      <ul>
        {moviesSearch &&
          moviesSearch.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`${movie.id}`}>{movie.title}</Link>
              </li>
            );
          })}
      </ul>
      <Outlet />
    </div>
  );
}
