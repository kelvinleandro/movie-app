import React, { createContext, useState, ReactNode } from 'react';

interface LikedMoviesContextType {
  likedMovies: number[];
  toggleLike: (movieId: number) => void;
}

export const LikedMoviesContext = createContext<LikedMoviesContextType | undefined>(undefined);

export const LikedMoviesProvider = ({ children }: { children: ReactNode }) => {
  const [likedMovies, setLikedMovies] = useState<number[]>([]);

  const toggleLike = (movieId: number) => {
    setLikedMovies((currentLikes) =>
      currentLikes.includes(movieId) ? currentLikes.filter(id => id !== movieId) : [...currentLikes, movieId]
    );
  };

  return (
    <LikedMoviesContext.Provider value={{ likedMovies, toggleLike }}>
      {children}
    </LikedMoviesContext.Provider>
  );
};