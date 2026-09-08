import React from "react";
import { useFavorites } from "../contexts/FavoritesContext";

export const Favorites: React.FC = () => {
  const { favorites, removeFavorite } = useFavorites();

  // אם אין סרטים במועדפים
  if (favorites.length === 0) {
    return (
      <div style={{ margin: "1rem 0" }}>
        <h2>My Favorite Movies</h2>
        <p>No favorite movies</p>
      </div>
    );
  }

  // אם יש סרטים במועדפים
  return (
    <div style={{ margin: "1rem 0" }}>
      <h2>My Favorite Movies</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {favorites.map((movie) => (
          <li
            key={movie}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              marginBottom: "0.5rem",
            }}
          >
            <span>{movie}</span>
            <button onClick={() => removeFavorite(movie)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};