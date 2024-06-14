import React from 'react';
import './card.css';
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";



function Card({ imageUrl, title, description, projectUrl }) {
  return (
    <div className='card'>
      <div className="card-content">
        <div className="card-image">
          <img src={imageUrl} alt='' />
        </div>
        <div className="card-text">
          <h4>{title}</h4>
          <p>{description}</p>
          <a href={projectUrl} target="_blank" rel="noreferrer"><FaArrowRight className='redirectIcon'/></a>
        </div>
        <div className="res-card-text">
          <h4>{title}</h4>
          <p>{description}</p>
          <a href={projectUrl} target="_blank" rel="noreferrer">
            <span className="viewproject">
          View Project<FaExternalLinkAlt  className='redirectIcon'/>
          </span></a>
        </div>
      </div>
    </div>
  );
}

export default Card;
