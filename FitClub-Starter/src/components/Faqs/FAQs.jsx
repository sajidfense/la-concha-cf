import React, { useState } from 'react';
import './faqs.css';
import { faqsData } from '../../data/faqsData'; // Update the path if needed

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="faqs" id="faqs">
      <h2 className="section-title stroke-text">FREQUENTLY ASKED QUESTIONS</h2>
      <div className="faq-list">
        {faqsData.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">{faq.question}</div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
