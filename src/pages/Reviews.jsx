import axios from 'axios';
import { useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
      params: { language: 'en-US', page: '1' },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjM2YWJkZmM3NDE4MTQ0MTZlZDNhOWQ3OGZkMzNiNiIsInN1YiI6IjY0MzU1ZDlmZWM4YTQzMDIxOTI2NzJhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JLPbYzf2ZSUL6iP2RY-vf-bExRMCVBdbt1ajwYeenmE',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setReviews(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [movieId]);

  return (
    <>
      {reviews && (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <h5>Author: {review.author}</h5>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )}
      {reviews && reviews.length < 1 && (
        <div>we dont have any movies for this film!</div>
      )}
    </>
  );
}
