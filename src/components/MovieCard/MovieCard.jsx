export default function MovieCard({ posterPath, title, releaseDate }) {
    const cardStyle = {
      backgroundImage: `url(${posterPath})`,
    };
  
    return (
      <div className="movie-card" style={cardStyle}>
        <div className="movie-info">
          <h2 className="movie-title">{title}</h2>
          <p className="release-date">Release Date: {releaseDate}</p>
        </div>
      </div>
    );
  }
  
