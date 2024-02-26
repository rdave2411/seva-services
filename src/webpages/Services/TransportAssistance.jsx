import React from 'react';
import ContentImageSection from '../../components/ContentImageSection/ContentImageSection';
import image from '../../assets/image-transport-1.jpeg';
import ContactForm from '../../components/ContactForm/ContactForm';

const TransportAssistance = () => {
  return (
    <div>
    <div className='container'>
        <ContentImageSection 
          title="Transport Assistance" 
          body="We can assist with transport as required.to get to appointments, social visits, or anywhere else with ease."
          imageSrc={image}
          imageHeight="300px"
          />
    </div>
    <h2> For more information, Contact us</h2>
    <div className='container'>
      <ContactForm />
    </div>
    </div>
  );
};

export default TransportAssistance;
