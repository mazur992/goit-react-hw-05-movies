export default function MoviesApiService() {
  const TMDB_API = 'https://api.themoviedb.org/3/';
  const MY_TMDB_KEY = '3f36abdfc741814416ed3a9d78fd33b6';

  // Ключове слово. Запит
  async function getMoviesSearch() {
    return fetch(
      `${TMDB_API}search/keyword?api_key=${MY_TMDB_KEY}&query=${searchQuery}`
    ).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }

  // Тренди дня. Запит
  async function getMoviesTop() {
    return fetch(
      `${TMDB_API}trending/movie/day?api_key=${MY_TMDB_KEY}&id`
    ).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }
  // Окремий фільм. Запит
  async function getMovieId(id) {
    return fetch(
      `${TMDB_API}movie/${id}?api_key=${MY_TMDB_KEY}&language=en-US`
    ).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }
  // Трейлер. Запит
  async function getMovieTrailerbyId(id) {
    return fetch(
      `${TMDB_API}movie/${id}/videos?api_key=${MY_TMDB_KEY}&language=en-US`
    ).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }
}
