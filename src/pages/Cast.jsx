import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { CastStyle } from '../components/App.styled';

export default function Cast() {
  const [actors, setActors] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${movieId}/credits`,
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
        setActors(response.data.cast);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [movieId]);

  return (
    <CastStyle>
      {actors && (
        <ul>
          {actors.map(actor => {
            return (
              <li key={actor.id}>
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                      : `https://via.placeholder.com/400x600/000000/FFFFFF?text=Not+Found`
                  }
                  alt="Actor"
                />
                <p>{actor.original_name}</p>
                <p>{`Character ${actor.character}`}</p>
              </li>
            );
          })}
        </ul>
      )}
      {!actors && <p>Opsss!</p>}
    </CastStyle>
  );
}
