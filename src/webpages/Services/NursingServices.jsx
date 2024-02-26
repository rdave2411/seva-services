import React from 'react';
import ContentImageSection from '../../components/ContentImageSection/ContentImageSection';
import image from '../../assets/image-phsyio.jpeg';
import ContactForm from '../../components/ContactForm/ContactForm';

const NursingServices = () => {
  return (
    <div>
    <div className='container'>
        <ContentImageSection 
          title="Nursing Services" 
          body="As the part of home care service, and the qualified staff are in place, we will look to provide clinical care either short-term or ongoing, along with community nursing services."
          imageSrc={image}
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

export default NursingServices;
