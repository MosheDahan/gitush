import React, { useState, type ReactNode } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
  // 1. state עם ברירת מחדל של מערך ריק []
  const [favorites, setFavorites] = useState<string[]>([]);

  // 2. addFavorite: אם הסרט כבר קיים - לא מוסיף שוב
  const addFavorite = (movie: string) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(movie)) {
        return prevFavorites; // הסרט כבר קיים, לא משנים את המערך
      }
      return [...prevFavorites, movie];
    });
  };

  // 3. removeFavorite: מסיר את הסרט מהרשימה
  const removeFavorite = (movieToRemove: string) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((movie) => movie !== movieToRemove)
    );
  };

  // 4. clearFavorites: מרוקן את כל הרשימה
  const clearFavorites = () => {
    setFavorites([]);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        clearFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};