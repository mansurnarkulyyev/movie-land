
import axios from 'axios';

const BASE_URL = "https://api.themoviedb.org/3/"

function fetchAPI() {
  const API_KEY = "5c333966bb14d20047a3fe3d6491ade8";
  const BASE_URL_TRENDING = `${BASE_URL}trending/movie/week`;
  const BASE_URL_SEARCH = `${BASE_URL}search/movie`;
  const BASE_URL_GENRES = `${BASE_URL}genre/movie/list`;

  async function fetchTrendingMovies(page) {
    try {
      const response = await axios.get(BASE_URL_TRENDING, {
        params: {
          api_key: API_KEY,
          page,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchMoviesByQuery(page, query) {
    try {
      const response = await axios.get(BASE_URL_SEARCH, {
        params: {
          api_key: API_KEY,
          page,
          query,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchGenres() {
    try {
      const response = await axios.get(BASE_URL_GENRES, {
        params: {
          api_key: API_KEY,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  return {
    fetchTrendingMovies,
    fetchMoviesByQuery,
    fetchGenres,
  };
}

export default fetchAPI();

