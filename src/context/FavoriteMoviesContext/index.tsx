import React, { createContext, useState, ReactNode } from "react";
import { Movie } from "@/types/api";

interface FavoriteMoviesContextType {
  favoriteMovies: Movie[];
  toggleFavorite: (movie: Movie) => void;
  isFavorite: (movieId: number) => boolean;
}

export const FavoriteMoviesContext = createContext<
  FavoriteMoviesContextType | undefined
>(undefined);

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
  };

  const isFavorite = (movieId: number) => {
    return favoriteMovies.some(movie => movie.id === movieId);
  };

  return (
    <FavoriteMoviesContext.Provider value={{ favoriteMovies, toggleFavorite, isFavorite }}>
      {children}
    </FavoriteMoviesContext.Provider>
  );
};
