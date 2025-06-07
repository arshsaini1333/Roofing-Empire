import React from 'react';
import '../public/Navbar.css';
// Importing Logos
import HomeIcon from '@mui/icons-material/Home';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import ApartmentIcon from '@mui/icons-material/Apartment';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CollectionsIcon from '@mui/icons-material/Collections';
import ReviewsIcon from '@mui/icons-material/Reviews';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';


import { useNavigate } from 'react-router-dom';

function DropdownMenu({ visible, onClose }) {
  const navigate = useNavigate();

  function handleClick(path)
  {
    navigate(`/${path}`);
    onClose();
  }
  return (
    <div className={`dropdown-menu ${visible ? 'open' : ''}`}>
      

      <div className="dropdown-content">
        <div className="nav-row">
          <div className="nav-card" onClick={()=>{handleClick('')}}>
            <span className='nc-logo'><HomeIcon/></span>
            <span className='nc-name'>Home</span>
          </div>
          <div className="nav-card" onClick={()=>{handleClick('about')}}>
            <span className='nc-logo'><HelpCenterIcon/></span>
            <span className='nc-name'>About Us</span>
          </div>
          <div className="nav-card" onClick={()=>{handleClick('project')}}>
            <span className='nc-logo'><ApartmentIcon/></span>
            <span className='nc-name'>Projects</span>
          </div>
          <div className="nav-card" onClick={()=>{handleClick('listing')}}>
            <span className='nc-logo'><EventAvailableIcon/></span>
            <span className='nc-name'>Available Listings</span>
          </div>
          
        </div>
        <div className="nav-row">
        <div className="nav-card" onClick={()=>{handleClick('gallery')}}>
            <span className='nc-logo'><CollectionsIcon/></span>
            <span className='nc-name'>Gallery</span>
          </div>
          <div className="nav-card" onClick={()=>{handleClick('whyus')}}>
            <span className='nc-logo'><TaskAltIcon/></span>
            <span className='nc-name'>Why Choose Us</span>
          </div>
          <div className="nav-card" onClick={()=>{handleClick('testimonials')}}>
            <span className='nc-logo'><ReviewsIcon/></span>
            <span className='nc-name'>Testimonials</span>
          </div>
          <div className="nav-card" onClick={()=>{handleClick('contact')}}>
            <span className='nc-logo'><ContactMailOutlinedIcon/></span>
            <span className='nc-name'>Contact Us</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropdownMenu;
