import React, { useState } from 'react';
import './FAQ.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <div className="question" onClick={toggleAccordion}>
        {question}
      </div>
      {isOpen && <div className="answer">{answer}</div>}
    </div>
  );
};

export default FAQItem;