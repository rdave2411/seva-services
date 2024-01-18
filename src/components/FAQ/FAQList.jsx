import React from 'react';
import FAQItem from './FAQItem';
import './FAQ.css';

const FAQList = () => {
  // You can customize the FAQ data as needed
  const faqData = [
    { id: 1, question: 'What is React?', answer: 'React is a JavaScript library for building user interfaces.' },
    { id: 2, question: 'How to install React?', answer: 'You can install React using npm or yarn.' },
    // Add more FAQ items as needed
  ];

  return (
    <div className="faq-list">
      {faqData.map((faq) => (
        <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQList;
