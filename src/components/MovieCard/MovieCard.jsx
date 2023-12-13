import './MovieCard.css';

export default function MovieCard({ posterPath, title, releaseDate }) {
    return (
      <div className="movie-card">
        <div className="card-data">
          <h2 className="movie-title">{title}</h2>
          <p className="release-date">Release Date: {releaseDate}</p>
        </div>
        <div>
          <img src={posterPath} alt={title} className='card-img'/>
        </div>
    </div>
    );
  }
  
