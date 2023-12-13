import { movies } from '../../data.js';
import MovieCard from '../../components/MovieCard/MovieCard';
import { Link } from 'react-router-dom';
import './MovieListPage.css';

export default function MovieListPage() {
  return (
    <div>
      <h1>Movie List Page</h1>
      <div className="movie-list">
        {movies.map((movie, index) => (
          <Link to={`/movies/${movie.title}`} key={index}>
            <MovieCard
              posterPath={movie.posterPath}
              title={movie.title}
              releaseDate={movie.releaseDate}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
