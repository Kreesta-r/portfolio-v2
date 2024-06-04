import React from 'react';
import './card.css';

function Card() {
  return (
    <div className='card'>
      <div className="card-content">
        <div className="card-image">
          <img src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg" alt=""/>
        </div>
        <div className="card-text">
          <h4>Card Title</h4>
          <p>Card Description</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
