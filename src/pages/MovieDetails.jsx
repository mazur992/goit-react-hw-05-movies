import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { MovieDetailsStyle } from '../components/App.styled';

export default function MovieDetails() {
  const locationDetails = useLocation();
  const [movieDetails, setMoviesDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${String(movieId)}`,
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjM2YWJkZmM3NDE4MTQ0MTZlZDNhOWQ3OGZkMzNiNiIsInN1YiI6IjY0MzU1ZDlmZWM4YTQzMDIxOTI2NzJhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JLPbYzf2ZSUL6iP2RY-vf-bExRMCVBdbt1ajwYeenmE',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setMoviesDetails(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [movieId]);

  return (
    <MovieDetailsStyle>
      {movieDetails && (
        <>
          <Link to={locationDetails.state?.from || '/'}>Back</Link>
          <div className="movieDetailsContainer">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
            <div>
              <h2>{`${movieDetails.title} (${
                movieDetails.release_date.split('-')[0]
              })`}</h2>
              <p className="movieScore">{`User Score: ${Math.round(
                movieDetails.vote_average * 10
              )}%`}</p>
              <h3>Overview</h3>
              <p className="movieOverwiew">{`${movieDetails.overview}`}</p>
              <h4>Genres</h4>
              <p>
                {movieDetails.genres.map(genre => {
                  return <span key={genre.id}>{`${genre.name} `}</span>;
                })}
              </p>
            </div>
          </div>
        </>
      )}
      <h4 className="movieSubTitle">Additional information</h4>
      <ul className="movieSubTitleList">
        <li className="movieitem">
          <Link to="cast">cast</Link>
        </li>
        <li className="movieitem">
          <Link to="reviews">reviews</Link>
        </li>
      </ul>
      <Outlet />
    </MovieDetailsStyle>
  );
}
