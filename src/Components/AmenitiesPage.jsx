// AmenitiesCardView.jsx
import React from 'react';
import './AmenC.css';

import parkingImg from '../assets/icons/parking.jpg';
import waterImg from '../assets/icons/water.jpg';
import windowImg from '../assets/icons/window.jpg';
import fanImg from '../assets/icons/fan.jpg';
import switchImg from '../assets/icons/switch.webp';
import wireImg from '../assets/icons/wire.jpg';
import powerImg from '../assets/icons/power.jpg';
import tilesImg from '../assets/icons/tiles.jpg';
import graniteImg from '../assets/icons/granite.jpg';
import gateImg from '../assets/icons/gate.jpg';
import internetImg from '../assets/icons/internet.jpg';
import gasImg from '../assets/icons/gas.webp';
import wardrobeImg from '../assets/icons/wardrobe.jpg';
import kitchenImg from '../assets/icons/kitchen.avif';
import lockImg from '../assets/icons/lock.webp';
import liftImg from '../assets/icons/lift.webp';

const amenitiesData = [
  { icon: parkingImg, title: 'Dedicated Car Parking', description: 'Secure car parking for all residents.' },
  { icon: waterImg, title: '24 Hours Water Supply', description: 'Continuous water supply throughout the day and night.' },
  { icon: windowImg, title: 'UPVC Door & Window', description: 'Durable and modern UPVC doors and windows.' },
  { icon: fanImg, title: 'Ceiling & Exhaust Fans', description: 'Orient/Havells/Usha branded ceiling and exhaust fans.' },
  { icon: switchImg, title: 'Havells Switches & Regulators', description: 'Premium quality electrical switches and regulators.' },
  { icon: wireImg, title: 'Polycab Wires', description: 'Safe and reliable wiring using Polycab wires.' },
  { icon: powerImg, title: 'Power Outlets', description: '16A/32A/64A power outlets installed in each flat.' },
  { icon: tilesImg, title: 'Italian/Bottichino Tiles', description: 'Designer tiles for flooring (64*32 ft size).' },
  { icon: graniteImg, title: 'Granite Stone', description: 'Granite stone for parking, lobby & staircase.' },
  { icon: gateImg, title: 'Gated Society', description: 'Secure gated community for residents.' },
  { icon: internetImg, title: 'Complete Internet Connectivity', description: 'High-speed internet access in all flats.' },
  { icon: gasImg, title: 'IGL Gas', description: 'Piped gas supply for convenience and safety.' },
  { icon: wardrobeImg, title: 'Wardrobe', description: 'Modular wardrobes in all bedrooms.' },
  { icon: kitchenImg, title: 'Modular Kitchens', description: 'Stylish modular kitchens with modern fittings.' },
  { icon: lockImg, title: 'Digital Locks', description: 'Smart digital locks for enhanced security.' },
  { icon: liftImg, title: 'Johnson Lifts', description: 'High-quality Johnson lifts & escalators.' },
];

const AmenitiesPage = () => {
  return (
    <div className="card-page">
      <div className="amp-heading" data-aos="fade-up">
        <div className="amph-sub">Amenities</div>
        <div className="amph-super">Every detail crafted for your comfort and convenience</div>
      </div>

      <div className="card-grid">
        {amenitiesData.map((item, index) => (
          <div className="amenity-card" key={index} data-aos="fade-up">
            <div
              className="card-background"
              style={{ backgroundImage: `url(${item.icon})` }}
            >
              <div className="card-overlay">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
              <div className="card-title">
                <h2>{item.title}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmenitiesPage;
