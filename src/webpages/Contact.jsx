import React from 'react';
import ContactForm from '../components/ContactForm/ContactForm';

const ContactPage = () => {
  return (
    <div>
    <div className='divider'/>
    <h1>Contact</h1>
    <p>We look forward to hearing from you and providing the assistance you need. Whether you have a general inquiry, require technical support, or want to learn more about us, our knowledgeable team is ready to assist you.</p>
    <ContactForm />

    </div>
  );
};

export default ContactPage;
