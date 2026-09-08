import { MovieList } from "./components/MovieList";
import { Favorites } from "./components/Favorites";
import { FavoritesSummary } from "./components/FavoritesSummary";

export default function App() {
  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "2rem auto",
        padding: "2rem",
        fontFamily: "sans-serif",
        background: "#f7f7f7",
        borderRadius: "16px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
      }}
    >
      <h1 style={{ marginTop: 0 }}>Favorite Movies</h1>
      <MovieList />
      <Favorites />
      <FavoritesSummary />
    </div>
  );
}