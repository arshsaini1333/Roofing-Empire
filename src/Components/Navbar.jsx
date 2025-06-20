import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import '../public/Navbar.css';
import logo from '../assets/logo1.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);
  const closeDrawer = () => setIsOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand desktop-only">
          <img src={logo} alt="" className='logo'/>
          <Link to="/" className='brand-name'>Roofing Empire</Link>
        </div>

        <div className="navbar-links desktop-only">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/project">Projects</Link>
          {/* <Link to="/listing">Amenities</Link> */}
          {/* <Link to="/gallery">Gallery</Link> */}
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="hamburger mobile-only" onClick={toggleDrawer}>
          <MenuIcon style={{ color: 'white', fontSize: '32px' }} />
        </div>
      </nav>

      {/* Mobile Slide Drawer */}
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        <div className="drawer-header">
         
          <img src={logo} alt="" className='logo' onClick={closeDrawer}/>
          <Link to="/" className='dh-brand-name' onClick={closeDrawer}>Roofing Empire</Link>
         
        </div>
        <div className="drawer-links">
          <Link to="/" onClick={closeDrawer}>Home</Link>
          <Link to="/about" onClick={closeDrawer}>About Us</Link>
          <Link to="/project" onClick={closeDrawer}>Projects</Link>
          {/* <Link to="/listing" onClick={closeDrawer}>Amenities</Link> */}
          {/* <Link to="/gallery" onClick={closeDrawer}>Gallery</Link> */}
          <Link to="/contact" onClick={closeDrawer}>Contact Us</Link>
        </div>
      </div>

      {/* Optional overlay for clicking outside */}
      {isOpen && <div className="overlay" onClick={closeDrawer}></div>}
    </>
  );
}
