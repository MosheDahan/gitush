import React from "react";
import { useFavorites } from "../contexts/FavoritesContext";

const movies = [
  "Titanic",
  "Avatar",
  "Gladiator",
  "The Matrix",
  "Inception"
];

export const MovieList: React.FC = () => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  return (
    <div style={{ margin: "1rem 0" }}>
      <h2>Movies List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {movies.map((movie) => {
          const isFavorite = favorites.includes(movie);

          const handleToggleFavorite = () => {
            if (isFavorite) {
              removeFavorite(movie);
            } else {
              addFavorite(movie);
            }
          };

          return (
            <li
              key={movie}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "0.5rem",
              }}
            >
              <span>{movie}</span>
              <button onClick={handleToggleFavorite}>
                {isFavorite ? "הסר מהמועדפים" : "הוסף למועדפים"}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};