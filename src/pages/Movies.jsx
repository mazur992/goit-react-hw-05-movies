import { Outlet, Link, useSearchParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect, Suspense } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import { MoviesStyle } from '../components/App.styled';
import Paginate from '../components/paginate/Paginate';

export default function Movies() {
  const locationMovies = useLocation();
  const [moviesSearch, setMoviesSearch] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalPages, setTotalPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const searchMovie = searchParams.get('search');
  const onSubmit = data => {
    data !== '' ? setSearchParams({ search: data }) : setSearchParams({});
  };
  function changePage(data) {
    setCurrentPage(data + 1);
  }
  useEffect(() => {
    if (searchMovie !== null) {
      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie',
        params: {
          query: `${searchMovie}`,
          include_adult: 'false',
          language: 'en-US',
          page: `${currentPage}`,
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
          setTotalPages(data.total_pages);
          setMoviesSearch(data.results);
          window.scrollTo({
            top: 0,
            behavior: 'instant',
          });
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }, [searchMovie, currentPage]);

  return (
    <MoviesStyle>
      <Searchbar onSubmit={onSubmit}></Searchbar>
      <div className="searchBodyContainer">
        <ul className="searchList">
          {searchMovie &&
            moviesSearch &&
            moviesSearch.map(movie => {
              return (
                <li className="searchItem" key={movie.id}>
                  <Link to={`${movie.id}`} state={{ from: locationMovies }}>
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
        {totalPages && (
          <Paginate totalPages={totalPages} changePage={changePage} />
        )}
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </MoviesStyle>
  );
}
