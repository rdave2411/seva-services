import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ heading, body, image, buttonText, buttonLink }) => {
    return (
      <div className="service-card">
        <div className="text-content">
          <h3>{heading}</h3>
          <p>{body}</p>
          <a href={buttonLink} className="button">
            {buttonText}
          </a>
        </div>
        <div className="image-content">
          <img src={image} alt={heading} />
        </div>
      </div>
    );
  };

export default ServiceCard;