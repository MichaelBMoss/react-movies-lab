import './MovieCard.css';

export default function MovieCard({ posterPath, title, releaseDate }) {
    const cardStyle = {
      backgroundImage: `url(${posterPath})`,
    };
  
    return (
      // <div className="movie-card" style={cardStyle}>
      //   <div className="movie-info">
      //     <h2 className="movie-title">{title}</h2>
      //     <p className="release-date">Release Date: {releaseDate}</p>
      //   </div>
      // </div>
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
  
