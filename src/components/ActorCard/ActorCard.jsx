import './ActorCard.css';

export default function ActorCard({ actor }) {
  // Generate a unique seed for each actor based on their name
  const seed = actor.toLowerCase().replace(/[^a-z]+/g, '');
  // Construct the image URL with the seed
  const imageUrl = `https://picsum.photos/seed/${seed}/200/300`;

  // Define the inline style with the background image
  const cardStyle = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <div className="actor-card" style={cardStyle}>
      <h2>{actor}</h2>
    </div>
  );
}
