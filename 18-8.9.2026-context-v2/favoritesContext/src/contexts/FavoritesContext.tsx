import React, { createContext, useContext, useState, type ReactNode } from "react";

// 1. הגדרת ה-Interface של נתוני ה-Context
interface FavoritesContextType {
  favorites: string[];
  addFavorite: (movie: string) => void;
  removeFavorite: (movie: string) => void;
  clearFavorites: () => void;
}

// 2. יצירת ה-Context
export const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

// 3. יצירת ה-Provider
interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  // הוספת סרט (מונע כפילויות)
  const addFavorite = (movie: string) => {
    setFavorites((prev) => (prev.includes(movie) ? prev : [...prev, movie]));
  };

  // הסרת סרט לפי שם
  const removeFavorite = (movieToRemove: string) => {
    setFavorites((prev) => prev.filter((movie) => movie !== movieToRemove));
  };

  // איפוס רשימת המועדפים
  const clearFavorites = () => {
    setFavorites([]);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, clearFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

// 4. Custom Hook לשימוש קל ברכיבים
export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};