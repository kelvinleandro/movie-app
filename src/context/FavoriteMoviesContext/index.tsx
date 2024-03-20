import React, { createContext, useState, ReactNode } from "react";
import { Movie } from "@/types/api";

// interface FavoriteMoviesContextType {
//   favoriteMovies: number[];
//   toggleFavorite: (movieId: number) => void;
// }

// export const FavoriteMoviesContext = createContext<FavoriteMoviesContextType | undefined>(undefined);

// export const FavoriteMoviesProvider = ({ children }: { children: ReactNode }) => {
//   const [favoriteMovies, setFavoriteMovies] = useState<number[]>([]);

//   const toggleFavorite = (movieId: number) => {
//     setFavoriteMovies((currentFavorites) =>
//       currentFavorites.includes(movieId)
//         ? currentFavorites.filter((id) => id !== movieId)
//         : [...currentFavorites, movieId]
//     );
//   };

//   return (
//     <FavoriteMoviesContext.Provider value={{ favoriteMovies, toggleFavorite }}>
//       {children}
//     </FavoriteMoviesContext.Provider>
//   );
// };

interface FavoriteMoviesContextType {
  favoriteMovies: Movie[];
  toggleFavorite: (movie: Movie) => void;
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
        // Movie is already in favorites, remove it
        return currentFavorites.filter((m) => m.id !== movie.id);
      } else {
        // Movie is not in favorites, add it
        return [...currentFavorites, movie];
      }
    });
  };

  return (
    <FavoriteMoviesContext.Provider value={{ favoriteMovies, toggleFavorite }}>
      {children}
    </FavoriteMoviesContext.Provider>
  );
};
