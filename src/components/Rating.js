import React from 'react';

const Rating = ({ rating }) => {
  const maxRating = 5; // Nombre total d'étoiles
  

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < maxRating; i++) {
      const starClass = i < rating? "rating__star rating__active" : "rating__star";
      stars.push(<i key={i} className={`fa-solid fa-star ${starClass}`}></i>);
    }

    return stars;
  };

  return <div>{renderStars()}</div>;
};

export default Rating;
