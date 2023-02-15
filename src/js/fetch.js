import axios from 'axios';

const BASE_URL = "https://api.themoviedb.org/3/"

const API_KEY = "5c333966bb14d20047a3fe3d6491ade8";
const BASE_URL_TRENDING = `${BASE_URL}trending/movie/week`;
const BASE_URL_SEARCH = `${BASE_URL}search/movie`;
const BASE_URL_GENRES = `${BASE_URL}genre/movie/list`;

export async function fetchTrendingMovies(page) {
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

export async function fetchMoviesByQuery(page, query) {
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

export async function fetchGenres() {
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




// import axios from 'axios';

// const BASE_URL = "https://api.themoviedb.org/3/"

// export default class fetchAPI {
//   static API_KEY = "5c333966bb14d20047a3fe3d6491ade8";
//   static BASE_URL_TRENDING = `${BASE_URL}trending/movie/week`;
//   static BASE_URL_SEARCH = `${BASE_URL}search/movie`;
//   static BASE_URL_GENRES = `${BASE_URL}genre/movie/list`;

//   static async fetchTrendingMovies(page) {
//     try {
//       const response = await axios.get(this.BASE_URL_TRENDING, {
//         params: {
//           api_key: this.API_KEY,
//           page,
//         },
//       });
//       return response;
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   static async fetchMoviesByQuery(page, query) {
//     try {
//       const response = await axios.get(this.BASE_URL_SEARCH, {
//         params: {
//           api_key: this.API_KEY,
//           page,
//           query,
//         },
//       });
//       return response;
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   static async fetchGenres() {
//     try {
//       const response = await axios.get(this.BASE_URL_GENRES, {
//         params: {
//           api_key: this.API_KEY,
//         },
//       });
//       return response;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// }
