import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Paginate from '../components/paginate/Paginate';
import AppContext from '../components/AppContext/AppContext';
import { HomeStyle } from '../components/App.styled';

import axios from 'axios';
export default function Home() {
  const { globalPage, setGlobalPage } = useContext(AppContext);
  const [movies, setMovies] = useState(null);
  const [totalPages, setTotalPages] = useState(null);

  function changePage(data) {
    setGlobalPage(data + 1);
  }

  useEffect(() => {
    async function getMoviesTop() {
      const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/trending/all/day`,
        params: { language: 'en-US', page: `${globalPage}` },
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
          setTotalPages(data.total_pages - 500);
          setMovies(data.results);
          window.scrollTo({
            top: 0,
            behavior: 'instant',
          });
        })
        .catch(function (error) {
          console.error(error);
        });
    }
    getMoviesTop();
  }, [globalPage]);

  return (
    <HomeStyle>
      <div>
        <ul className="homeList">
          {movies &&
            movies.map(movie => {
              return (
                movie.title && (
                  <li className="homeItem" key={movie.id}>
                    <Link to={`movies/${movie.id}`}>
                      <img
                        src={
                          movie.poster_path
                            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                            : `https://via.placeholder.com/400x600/000000/FFFFFF?text=Not+Found`
                        }
                        alt="movie"
                      />
                      <p className="homeMovieTitle">{movie.title}</p>
                    </Link>
                  </li>
                )
              );
            })}
        </ul>
      </div>
      {totalPages && (
        <Paginate totalPages={totalPages} changePage={changePage} />
      )}
    </HomeStyle>
  );
}
