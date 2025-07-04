import { useState } from 'react';

import EnquiryPopup from './EnquiryPopup';
import '../public/Home.css'
import bgvdo from '../assets/Homebg.mp4'
export default function Hero()
{
  const [isPopupOpen, setIsPopupOpen] = useState(false);

    return(
      
      <div className="home-container">
      <video className="background-video" autoPlay loop muted playsInline>
        <source src={bgvdo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="home-content">
        <h1>Premium Low-Rise Flats & Plots in Chhattarpur & DLF Farms </h1>
        <p>Your Trusted Real Estate Developer in South Delhi for Over 5 Years</p>
        <button  onClick={() => setIsPopupOpen(true)}>Secure Your Space in South Delhi</button>
      </div>

      <EnquiryPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
      
    )
}