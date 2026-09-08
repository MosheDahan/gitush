import React from "react";
import { useFavorites } from "../contexts/FavoritesContext";

export const FavoritesSummary: React.FC = () => {
    const { favorites, clearFavorites } = useFavorites();

    return (
        <div
            style={{
                marginTop: "1.5rem",
                padding: "1rem",
                borderTop: "1px solid #ccc",
            }}
        >
            <p>Number of favorite movies: {favorites.length}</p>
            <button
                onClick={clearFavorites}
                disabled={favorites.length === 0}
                style={{
                    cursor: favorites.length === 0 ? "not-allowed" : "pointer",
                }}
            >
                Clear All Favorites
            </button>
        </div>
    );
};