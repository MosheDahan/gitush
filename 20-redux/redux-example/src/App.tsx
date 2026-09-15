import CounterPage from "./CounterPage";
import LanguagePage from "./LanguagePage";
import MoviePage from "./MoviePage";
import Stam from "./Stam";
import UserPage from './UserPage'
import UserPage2 from './UserPage2'
import DisplayUser from './DisplayUser'
import { ProductPage } from './ProductPage';

import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { CityPage } from './CityPage';
export default function App() {

  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-content">
        <Routes>
          <Route path="/" element={<CounterPage />} />
          <Route path="/language" element={<LanguagePage />} />
          <Route path="/movie" element={<MoviePage />} />
          <Route path="/stam" element={<Stam />} />
          <Route path="/city" element={<CityPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/displayuser" element={<DisplayUser />} />
          <Route path="/user2" element={<UserPage2 />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </main>
      <footer className="app-footer">
        <span>REDUX LAB / 2026</span>
        <span>State, beautifully connected.</span>
      </footer>
    </div>
  );
}