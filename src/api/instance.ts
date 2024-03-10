import axios, { AxiosInstance } from "axios";

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzUzMDEyYjg2MTEyY2VlNWZjN2VmZjEzOGIxNTc1OSIsInN1YiI6IjY1ZDllM2FjNzJkODU1MDE4NWJjNzlmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gAOoFSIU91PAbvN7IC4OCr0AqXpW3Ij5PWaLb9h6xKA";
const BASE_URL = "https://api.themoviedb.org/3/";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
    accept: "application/json",
  },
});

// const axiosInstance: AxiosInstance = axios.create({
//   baseURL: 'https://api.themoviedb.org/3/',
//   params: {
//     api_key: 'YOUR_TMDB_API_KEY', // Replace with your actual TMDB API key
//     language: 'en-US'
//   },
// });

export default axiosInstance;
