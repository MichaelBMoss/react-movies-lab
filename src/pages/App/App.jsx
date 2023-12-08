import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import ActorListPage from '../ActorListPage/ActorListPage';
import NavBar from '../../components/NavBar/NavBar';
import LoginPage from '../LoginPage/LoginPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';


export default function App() {
  const [user, setUser] = useState({});

  return (
    <main className="App">
      { user ?
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<MoviesListPage />} />
            <Route path="/actors" element={<ActorListPage />} />
            <Route path="/movies/:movieName" element={<MovieDetailPage />} />
          </Routes>
        </>
        :
        <LoginPage />
      }
    </main>
  );
}
