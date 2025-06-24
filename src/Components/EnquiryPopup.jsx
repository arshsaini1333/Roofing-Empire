import React from "react";
import "./EnquiryPopup.css";
import img from '../assets/contactForm.jpeg'
const EnquiryPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="popup-left">
          <img
            src={img} // replace with your image path
            alt="Beautiful Flats"
          />
        </div>
        <div className="popup-right">
          <h2>Book Your Dream Home Today</h2>
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit">Submit Enquiry</button>
          </form>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
      </div>
    </div>
  );
};

export default EnquiryPopup;
