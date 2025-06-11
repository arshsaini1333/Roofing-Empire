import React from 'react';
import '../public/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>Roofing Empire</h2>
          <p>Your Trusted Real Estate Partner in South Delhi</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>📍 Chhattarpur & DLF Farms, South Delhi</p>
          <p>📞 +91 9876543210</p>
          <p>✉️ roofingempire@gmail.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Roofing Empire. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
