import './ActorCard.css';

export default function ActorCard({ actor }) {
  // Generate a unique seed for each actor based on their name
  const seed = actor.toLowerCase().replace(' ', '-');
  // Construct the image URL with the seed
  const imageUrl = `https://picsum.photos/seed/${seed}/200/300`;

  return (
    <div className="actor-card">
      <div className="card-data">
        <h2>{actor}</h2>
      </div>
      <div>
        <img src={imageUrl} alt={actor} className='card-img' />
      </div>
    </div>
  );
}

