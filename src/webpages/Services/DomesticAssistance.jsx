import React from 'react';
import ContentImageSection from '../../components/ContentImageSection/ContentImageSection';
import image from '../../assets/image-cleaning.jpeg';
import ContactForm from '../../components/ContactForm/ContactForm';

const DomesticAssistance = () => {
  return (
    <div>
    <div className='container'>
        <ContentImageSection 
          title="Domestic Assistance" 
          body="Assisting a loved one to maintain their independence can help an entire family avoid unnecessary stresses and improve quality of life, particularly as many families are not equipped appropriately or have the time needed."
          imageSrc = {image}
          imageHeight="300px"
          />
    </div>
    <h2> For more information, contact us</h2>
    <div className='container'>
      <ContactForm />
    </div>
    </div>
  );
};

export default DomesticAssistance;
