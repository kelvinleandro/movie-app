import React, { createContext, useState, ReactNode, useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen';

import { Movie } from "@/types/api";
import { getCurrentUserUid, getUserDoc, toggleMovieId } from "@/utils/firebase";
import { fetchMoviesByIds } from "@/api/helper";

interface FavoriteMoviesContextType {
  favoriteMovies: Movie[];
  toggleFavorite: (movie: Movie) => void;
  isFavorite: (movieId: number) => boolean;
  setFavoriteMovies: (movies: Movie[]) => void;
}

export const FavoriteMoviesContext = createContext<
  FavoriteMoviesContextType
>({
  favoriteMovies: [],
  toggleFavorite: (movie: Movie) => {},
  isFavorite: (movieId: number) => {return false},
  setFavoriteMovies: (movies: Movie[]) => {}
});

export const FavoriteMoviesProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);

  const toggleFavorite = (movie: Movie) => {
    setFavoriteMovies((currentFavorites) => {
      const index = currentFavorites.findIndex((m) => m.id === movie.id);
      if (index >= 0) {
        return currentFavorites.filter((m) => m.id !== movie.id);
      } else {
        return [...currentFavorites, movie];
      }
    });
    toggleMovieId(getCurrentUserUid(), movie.id);
  };

  const isFavorite = (movieId: number) => {
    return favoriteMovies.some(movie => movie.id === movieId);
  };

  // useEffect(() => {
  //   const loadData = async () => {
  //     const userDoc = await getUserDoc(getCurrentUserUid());
  //     const cloudMovies = await fetchMoviesByIds(userDoc.moviesId);
  //     if (cloudMovies.length > 0) {
  //       setFavoriteMovies(cloudMovies);
  //     }
  //   }
  //   loadData();
  // }, [])

  const value = {
    favoriteMovies,
    toggleFavorite,
    isFavorite,
    setFavoriteMovies,
  }

  return (
    <FavoriteMoviesContext.Provider value={value}>
      {children}
    </FavoriteMoviesContext.Provider>
  );
};
