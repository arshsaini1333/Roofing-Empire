import React, { useState } from 'react';
import '../public/Home.css'

const faqs = [
  {
    question: "What types of properties do you offer in South Delhi?",
    answer: "We offer low-rise flats (2BHK to 4BHK) and freehold plots (100–1000 sq yds) in areas like DLF Farms and Chhattarpur."
  },
  {
    question: "How do I schedule a site visit?",
    answer: "Fill out the “Book Free Site Visit” form or use our WhatsApp chat button to connect instantly with our team."
  },
  {
    question: "Do you provide loan or EMI assistance?",
    answer: "Absolutely! We offer home loan guidance and EMI support through our banking partners."
  },
  {
    question: "Are your properties ready to move in?",
    answer: "Yes, we have several ready-to-move flats and plots with clear availability and pricing info."
  },
  {
    question: "What amenities are included in your properties?",
    answer: "Homes include modular kitchens, branded fittings, gated societies, dual security, and metro/school proximity."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="faq-container" data-aos="fade-up">
      <div className="faq-headings">
        <div className="faq-sub">Frequently Asked Questions</div>
        <div className="faq-super">Everything You Need to Know
</div>
      </div>
      {faqs.map((faq, index) => (
        <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {index+1}. &nbsp;  {faq.question}
            <span className="faq-toggle">{openIndex === index ? '-' : '+'}</span>
          </div>
          <div className={`faq-answer ${openIndex === index ? 'visible' : ''}`}>
          {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
