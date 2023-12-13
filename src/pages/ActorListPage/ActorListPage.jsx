import { movies } from '../../data.js';
import ActorCard from '../../components/ActorCard/ActorCard';
import './ActorListPage.css';

const actorsWithDupes = movies.map((movie) => movie.cast).flat();
const uniqueActorsSet = new Set(actorsWithDupes);
const uniqueActors = Array.from(uniqueActorsSet);

export default function ActorListPage() {
  return (
    <div className='actor-list-page'>
      <h1>Actor List Page</h1>
      <div className="actor-list">
        {uniqueActors.map((actor, index) => (
            <ActorCard actor={actor} />
        ))}
      </div>
    </div>
  );
}