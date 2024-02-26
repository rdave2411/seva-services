import React from 'react';
import './css/Home.css';

// Components
import ServiceGrid from '../components/ServiceCard/ServiceGrid';
import ContactForm from '../components/ContactForm/ContactForm';
import FAQList from '../components/FAQ/FAQList';
import ContentImageSection from '../components/ContentImageSection/ContentImageSection'; 
import image from '../assets/image-care-1.jpeg';

const HomePage = () => {
  return (
      <div className='container'>
        <div className='divider'/>
        <ContentImageSection
            title="Sewa Services"
            body="Senior Victorians enjoy the benefits of living longer, as respected members of our community. The diversity of our population is valued and there are ongoing opportunities to contribute and take part in our communities as people age. All Victorians can safely age in place at home, accessing services, and maintaining purpose, independence and autonomy in life with family, community and social connections.
            The program supports older people with complex care needs to live independently in their own homes. It uses a consumer-directed care approach to make sure the support suits a person's needs and goals."
            imageSrc={image}
            imagePosition="right" // or "right" to specify the image position
            imageHeight="400px"
          />
        <h2>Ability Aid provides specialised NDIS services such as</h2>
        <ServiceGrid />
          <h2>Contact us</h2>
          <ContactForm />

      </div>
  );
};

export default HomePage;
