import React from 'react';
import ContentImageSection from '../../components/ContentImageSection/ContentImageSection';
import image from '../../assets/image-care-1.jpeg';
import ContactForm from '../../components/ContactForm/ContactForm';

const InHomeRespite = () => {
  return (
    <div>
    <div className='container'>
        <ContentImageSection 
          title="In-Home Respite" 
          body="Caring for a loved one can be challenging for caregivers which is why we offer temporary live-in respite services so that the caregiver can take a break from their role. This enables caregivers to take some time out for holiday and rest, ensuring peace of mind that the loved one is receiving the best care while away."
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

export default InHomeRespite;
