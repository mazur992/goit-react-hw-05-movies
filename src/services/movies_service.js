import axios from 'axios';

// Тренди дня. Запит
export async function getMoviesTop() {
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
    .then(async function (response) {
      return response.data;
    })
    .then(async function (data) {
      return await data.results;
    })
    .catch(function (error) {
      console.error(error);
    });
}
// async function getMoviesTop() {

// }
//   // Ключове слово. Запит
//   async function getMoviesSearch() {}

//   // Окремий фільм. Запит
//   async function getMovieId(id) {}
//   // Трейлер. Запит
//   async function getMovieTrailerbyId(id) {}
