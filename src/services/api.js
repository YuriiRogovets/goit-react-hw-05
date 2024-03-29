import axios from "axios";

// const BASE_URL =
//   "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

// const BASE_URL = "https://api.themoviedb.org /3/";
// const API_KEY = "46e2fada42cc9a7d556a16523f350282";

// axios.defaults.baseURL = BASE_URL;

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmUyZmFkYTQyY2M5YTdkNTU2YTE2NTIzZjM1MDI4MiIsInN1YiI6IjY1ZmU2OGRjOTBmY2EzMDE3ZGExNDI4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Lcwd0z8-oQvohTlqm1HLA8P7helpxOUJ1mOdjYNU-ic";

export const getTrendingMovies = async () => {
  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  const searchParams = {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  };

  const { data } = await axios.get(url, searchParams);
  return data.results;
};

export const getSearchMovies = async (query, page = 1) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`;
  const searchParams = {
    headers: {
      Authorization: ` Bearer ${API_TOKEN}`,
    },
  };
  const { data } = await axios.get(url, searchParams);
  return data;
};

export const getMovieDetails = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const searchParams = {
    headers: {
      Authorization: ` Bearer ${API_TOKEN}`,
    },
  };
  const { data } = await axios.get(url, searchParams);
  return data;
};

export const getMovieCredits = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;

  const searchParams = {
    headers: {
      Authorization: ` Bearer ${API_TOKEN}`,
    },
  };
  const response = await axios.get(url, searchParams);
  return response;
};

export const getMovieReviews = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US`;

  const searchParams = {
    headers: {
      Authorization: ` Bearer ${API_TOKEN}`,
    },
  };
  const response = await axios.get(url, searchParams);
  return response;
};
