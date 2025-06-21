import React from 'react';
import '../public/Footer.css';
import logo from '../assets/logo1.png'
import { Link, useLocation, useNavigate } from "react-router-dom";
const Footer = () => {
  const location = useLocation();

  const handleClick = (to) => (e) => {
    
      window.scrollTo({ top: 0, behavior: "smooth" });
   
  };

  const navigate = useNavigate();

  const clickBrand = () => {
    navigate("/"); 
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className='brands' onClick={clickBrand} > <img src={logo} alt="" /> <span>Roofing Empire</span></div>
          <p>Your Trusted Real Estate Partner in South Delhi</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
        <li><Link to="/" onClick={handleClick("/")}>Overview</Link></li>
        <li><Link to="/about" onClick={handleClick("/about")}>About Us</Link></li>
        <li><Link to="/project" onClick={handleClick("/project")}>Projects</Link></li>
        <li><Link to="/contact" onClick={handleClick("/contact")}>Contact</Link></li>
      </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>📍 Chhattarpur & DLF Farms, South Delhi</p>
          <p>📞 +91 9999200048</p>
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
