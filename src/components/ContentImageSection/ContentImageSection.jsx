// ContentImageSection.jsx
import React from 'react';
import './ContentImageSection.css';

const ContentImageSection = ({ title, body, imageSrc, imagePosition }) => {
  return (
    <div className={`content-image-section ${imagePosition}`}>
      <div className="content">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div className="image">
        <img src={imageSrc} alt="Content Image Section" />
      </div>
    </div>
  );
};

export default ContentImageSection;
