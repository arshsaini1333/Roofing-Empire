import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu.jsx';
import '../public/Navbar.css';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import  CloseIcon from '@mui/icons-material/Close'; 
import CallMadeIcon from '@mui/icons-material/CallMade';
import {Link} from 'react-router-dom'

import logo from '../assets/logo1.png'
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className={`navbar ${menuOpen ? 'opened' : ''}`}>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <DragHandleIcon sx={{ fontSize: 40 }} className={` ${menuOpen ? 'buttonOpen' : 'buttonClose'}`}/>
          <CloseIcon sx={{ fontSize: 40 }} className={` ${menuOpen ? 'buttonClose' : 'buttonOpen'}`}/>
        </button>

        <div className="logo">
          <img src={logo} alt="" />
          <p>Roofing Empire</p>
        </div>

        <div className="external-link">
          <Link to='/contact' className='ext-link'><span className='callArrow'><CallMadeIcon  className='call-arr-inner'/></span><span>Let's Talk</span></Link>
        </div>
      </nav>

      {/* Dropdown slides below navbar */}
      <DropdownMenu visible={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

export default Navbar;
