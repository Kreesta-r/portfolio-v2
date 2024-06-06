import React from 'react';
import './card.css';

function Card({ imageUrl, title, description }) {
  return (
    <div className='card'>
      <div className="card-content">
        <div className="card-image">
          <img src={imageUrl} alt='' />
        </div>
        <div className="card-text">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
