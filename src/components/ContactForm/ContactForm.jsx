// ContactForm.js
import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, such as sending the data to a server
    console.log('Form submitted:', formData);
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <form className='contact-form' onSubmit={handleSubmit}>
      <div className='column'>
        <label htmlFor="name">Name:</label>
        <label htmlFor="email">Email:</label>
        <label htmlFor="phone">Phone:</label>
        <label htmlFor="message">Message:</label>
      </div>

      <div className='column'>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
        <input className='message' id="message" name="message" value={formData.message} onChange={handleChange} />
      </div>

      <div className='button-container'>
        <button type="submit">Send</button>
      </div>
    </form>
  );
};

export default ContactForm;
