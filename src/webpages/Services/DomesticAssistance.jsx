import React from 'react';

const DomesticAssistance = () => {
  return (
    <div>
      <div className='divider'/>
      <ContentImageSection
      title="Domestic Assistance"
      body="Assisting a loved one to maintain their independence can help an entire family avoid unnecessary stresses and improve quality of life, particularly as many families are not equipped appropriately or have the time needed"
      imageSrc="path/to/your/image.jpg"
      imagePosition="left" // or "right" to specify the image position
      />
  </div>
  );
};

export default DomesticAssistance;
