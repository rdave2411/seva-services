// ContentImageSection.jsx
import React from 'react';
import './ContentImageSection.css';

const ContentImageSection = ({ title, body, imageSrc, imagePosition, imageHeight }) => {
  return (
    <div className={`content-image-section ${imagePosition}`}>
      <div className="content">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div className="image">
        <img src={imageSrc} alt="Content Image Section" style={{ height: imageHeight, width: 'auto' }} />
      </div>
    </div>
  );
};

export default ContentImageSection;
