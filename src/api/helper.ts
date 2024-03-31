import axiosInstance from "./instance";

import {CastMember, Genre, Movie, CrewMember } from "@/types/api"

const fetchCategories = async (): Promise<Genre[]> => {
  try {
    const response = await axiosInstance.get<{ genres: Genre[] }>('genre/movie/list');
    return response.data.genres;
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    throw error;
  }
};

const fetchMovie = async (movieId: string): Promise<Movie> => {
  try {
    const response = await axiosInstance.get(`movie/${movieId}`);
    return response.data as Movie;
  } catch (error) {
    console.error(`Error fetching movie ${movieId}:`, error);
    throw error;
  }
}

const fetchRandomPopularMovie = async (): Promise<Movie> => {
  try {
    const response = await axiosInstance.get(`movie/popular`);
    const randomIndex = Math.floor(Math.random() * response.data.results.length);
    return response.data.results[randomIndex] as Movie;
  } catch (error) {
    console.error(`Error fetching random popular movie:`, error);
    throw error;
  }
}

const fetchMovieCast = async (movieId: number): Promise<CastMember[]> => {
  try {
    const response = await axiosInstance.get<{ cast: CastMember[] }>(`movie/${movieId}/credits`);
    return response.data.cast;
  } catch (error) {
    console.error(`Failed to fetch cast for movie ${movieId}:`, error);
    throw error;
  }
};

const fetchMovieCrew = async (movieId: number): Promise<CrewMember[]> => {
  try {
    const response = await axiosInstance.get<{ crew: CrewMember[] }>(`movie/${movieId}/credits`);
    return response.data.crew;
  } catch (error) {
    console.error(`Failed to fetch crew for movie ${movieId}:`, error);
    throw error;
  }
};

const fetchNowPlayingMovies = async (): Promise<Movie[]> => {
  try {
    const response = await axiosInstance.get<{ results: Movie[] }>('/movie/now_playing', { params: { page: 1 } });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching now playing movies:', error);
    throw error;
  }
};

const fetchUpcomingMovies = async (): Promise<Movie[]> => {
  try {
    const response = await axiosInstance.get<{ results: Movie[] }>('/movie/upcoming', { params: { page: 1 } });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching upcoming movies:', error);
    throw error;
  }
};

const fetchPopularMovies = async (): Promise<Movie[]> => {
  try {
    const response = await axiosInstance.get<{ results: Movie[] }>('/movie/popular', { params: { page: 1 } });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
};

const fetchTrendingMovies = async (timeframe: 'day' | 'week'= 'day'): Promise<Movie[]> => {
  try {
    const response = await axiosInstance.get<{ results: Movie[] }>(`/trending/movie/${timeframe}`);
    return response.data.results;
  } catch (error) {
    console.error(`Error fetching trending content for ${timeframe}:`, error);
    throw error;
  }
};

const fetchSimilarMovies = async (movieId: number): Promise<Movie[]> => {
  try {
    const response = await axiosInstance.get<{ results: Movie[] }>(`/movie/${movieId}/similar`);
    return response.data.results;
  } catch (error) {
    console.error(`Error fetching similar movies to movie ${movieId}:`, error);
    throw error;
  }
};

const fetchMoviesByGenre = async (genreId: number): Promise<Movie[]> => {
  try {
    const response = await axiosInstance.get<{results: Movie[]}>(`discover/movie`, {
      params: { with_genres: genreId }
    });
    return response.data.results;
  } catch (error) {
    console.error(`Error fetching movies by genre ${genreId}:`, error);
    throw error;
  }
};

const fetchMoviesByQuery = async (query: string): Promise<Movie[]> => {
  try {
    const response = await axiosInstance.get<{results: Movie[]}>("search/movie", {
      params: { query: query }
    });
    return response.data.results;
  } catch (error) {
    console.error(`Error fetching movies by title ${query}:`, error);
    throw error;
  }
};

export {
  fetchCategories,
  fetchMovie,
  fetchMovieCast,
  fetchMovieCrew,
  fetchMoviesByGenre,
  fetchNowPlayingMovies,
  fetchPopularMovies,
  fetchRandomPopularMovie,
  fetchSimilarMovies,
  fetchTrendingMovies,
  fetchUpcomingMovies,
  fetchMoviesByQuery
}