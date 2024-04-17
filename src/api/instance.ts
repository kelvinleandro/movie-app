import axios, { AxiosInstance } from "axios";

// const ACCESS_TOKEN = "place_your_access_token_here";
const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmIzNmMzMGE0ZTkxOGYyNWY2M2YzZjk5YzAzMTkxMyIsInN1YiI6IjY1ZDllM2FjNzJkODU1MDE4NWJjNzlmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jLLWyQbiSv8ANHlVCT65yCt-6-UkoIxHA_XzKIsFgek";
const BASE_URL = "https://api.themoviedb.org/3/";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
    accept: "application/json",
  },
});

export default axiosInstance;
