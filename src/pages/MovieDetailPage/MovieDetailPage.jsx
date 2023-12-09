import { useParams } from 'react-router-dom';
import { movies } from '../../data.js';

export default function MovieDetailPage() {
  // Get the movieName from the route parameter
  const { movieName } = useParams();

  // Find the movie in the movies array based on the title
  const movie = movies.find((movie) => movie.title === movieName);

  // Check if the movie exists
  if (!movie) {
    return <div>Movie not found</div>;
  }

  const { title, releaseDate, cast, posterPath } = movie;

  return (
    <div>
      <h1>{title}</h1>
      <p>Release Date: {releaseDate}</p>
      <div>
        <h3>Cast:</h3>
        <p>{cast.join(', ')}</p>
      </div>
      <img src={posterPath} alt={title} />
    </div>
  );
}
