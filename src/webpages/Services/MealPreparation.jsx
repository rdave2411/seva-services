import React from 'react';
import ContentImageSection from '../../components/ContentImageSection/ContentImageSection';
import image from '../../assets/image-feeding.jpeg';
import ContactForm from '../../components/ContactForm/ContactForm';

const MealPreparation = () => {
  return (
    <div>
    <div className='container'>
        <ContentImageSection 
          title="Meal Preparation" 
          body="A balanced diet each day is an important aspect of leading a healthy lifestyle. It helps in being energetic to stay alert and functioning all day, builds immunity and improves one’s mental well-being. To ensure that the customer receives all the benefits of a balanced diet, we can assist you by coming to your place and preparing three nutritious meals daily."
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

export default MealPreparation;
