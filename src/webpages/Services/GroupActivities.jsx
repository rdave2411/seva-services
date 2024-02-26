import React from 'react';
import ContentImageSection from '../../components/ContentImageSection/ContentImageSection';
import image from '../../assets/image-transport-1.jpeg';
import ContactForm from '../../components/ContactForm/ContactForm';

const GroupActivities = () => {
  return (
    <div>
    <div className='container'>
        <ContentImageSection 
          title="Group and Centre Activities" 
          body="We offer a range of group activity programs that help people living with a disability or chronic illness to manage their symptoms, build coping skills and have fun. We aim to help people make positive changes in their lives, like meeting new people, exploring new interests and finding new ways to socialize.
          Everyone should be able to participate in the community the way they want to. We can help you develop daily living skills as well as support you with community access."
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

export default GroupActivities;
