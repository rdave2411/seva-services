// ServiceGrid.js
import React from 'react';
import ServiceCard from './ServiceCard';
import './ServiceCard.css';

const ServiceGrid = () => {
  // You can customize the data for each ServiceCard as needed
  const serviceData = [
    {
      heading: 'Domestic Assistance',
      body: 'Assisting a loved one to maintain their independence can help an entire family avoid unnecessary stresses and improve quality of life, particularly as many families are not equipped appropriately or have the time needed',
      image: '../../assets/image-care-1.jpeg',
      buttonText: 'Learn More',
      buttonLink: '/services',
    },
    {
        heading: 'Personal Care (Dressing and Showering)',
        body: 'Personal hygiene and self-care are important to well-being and we assist with dressing, grooming, bathing, and toileting as per client demands.',
        image: 'https://www.pakainfo.com/wp-content/uploads/2021/09/image-url-for-testing.jpg',
        buttonText: 'Learn More',
        buttonLink: '/services',
      },
      {
        heading: 'Meal Preparation',
        body: 'A balanced diet each day is an important aspect of leading a healthy lifestyle. It helps in being energetic to stay alert and functioning all day, builds immunity and improves one’s mental well-being. To ensure that the customer receives all the benefits of a balanced diet, we can assist you by coming to your place and preparing three nutritious meals daily.',
        image: 'https://www.pakainfo.com/wp-content/uploads/2021/09/image-url-for-testing.jpg',
        buttonText: 'Learn More',
        buttonLink: '/services',
      },
      {
        heading: 'Service 4',
        body: 'We create responsive and user-friendly websites using the latest technologies.',
        image: 'https://www.pakainfo.com/wp-content/uploads/2021/09/image-url-for-testing.jpg',
        buttonText: 'Learn More',
        buttonLink: '/services',
      },
  ];

  return (
    <div className="service-grid">
      {serviceData.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
};

export default ServiceGrid;
