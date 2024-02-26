import React from 'react';
import ContentImageSection from '../../components/ContentImageSection/ContentImageSection';
import image from '../../assets/image-care-2.jpeg';
import ContactForm from '../../components/ContactForm/ContactForm';

const PersonalCare = () => {
  return (
    <div>
    <div className='container'>
        <ContentImageSection 
          title="Personal Care" 
          body="Personal hygiene and self-care are important to well-being and we assist with dressing, grooming, bathing, and toileting as per client demands."
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

export default PersonalCare;
