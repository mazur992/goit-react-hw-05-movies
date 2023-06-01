import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Paginate from '../components/paginate/Paginate';

import { HomeStyle } from '../components/App.styled';

import axios from 'axios';
export default function Home() {
  const [movies, setMovies] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  function changePage(data) {
    setCurrentPage(data + 1);
  }

  useEffect(() => {
    async function getMoviesTop() {
      const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/trending/all/day?page=${currentPage}`,
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
          setTotalPages(data.total_pages);
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
  }, [currentPage]);

  return (
    <HomeStyle>
      <div>
        {/* <h1>Trending today</h1> */}
        <ul className="homeList">
          {movies &&
            movies.map(movie => {
              return (
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
                    {movie.title || movie.name}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
      {totalPages && (
        <Paginate totalPages={totalPages} changePage={changePage} />
      )}
      ,
    </HomeStyle>
  );
}
