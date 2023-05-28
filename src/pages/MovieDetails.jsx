import { Outlet, Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function MovieDetails() {
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
    <>
      {movieDetails && (
        <>
          <h2>{`${movieDetails.title} (${movieDetails.release_date})`}</h2>
          <p>{`User Score: ${Math.round(movieDetails.vote_average * 10)}%`}</p>
          <h3>Overview</h3>
          <p>{`${movieDetails.overview}`}</p>
          <h4>Genres</h4>
          <p></p>
        </>
      )}
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">cast</Link>
        </li>
        <li>
          <Link to="reviews">reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
