import React, { createContext, useState, ReactNode } from "react";

interface FavoriteMoviesContextType {
  favoriteMovies: number[];
  toggleFavorite: (movieId: number) => void;
}

export const FavoriteMoviesContext = createContext<FavoriteMoviesContextType | undefined>(undefined);

export const FavoriteMoviesProvider = ({ children }: { children: ReactNode }) => {
  const [favoriteMovies, setFavoriteMovies] = useState<number[]>([]);

  const toggleFavorite = (movieId: number) => {
    setFavoriteMovies((currentFavorites) =>
      currentFavorites.includes(movieId)
        ? currentFavorites.filter((id) => id !== movieId)
        : [...currentFavorites, movieId]
    );
  };

  return (
    <FavoriteMoviesContext.Provider value={{ favoriteMovies, toggleFavorite }}>
      {children}
    </FavoriteMoviesContext.Provider>
  );
};
