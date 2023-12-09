import { movies } from '../../data.js';
import MovieCard from '../../components/MovieCard/MovieCard';

export default function MovieListPage() {
  return (
    <div>
      <h1>Movie List Page</h1>
      <div className="movie-list">
        {movies.map((movie, index) => (
          <MovieCard
            key={index} // Use a unique key for each MovieCard
            posterPath={movie.posterPath}
            title={movie.title}
            releaseDate={movie.releaseDate}
          />
        ))}
      </div>
    </div>
  );
}