import '../public/Amenties.css'

// Import your images
import a1 from '../assets/a1.jpeg';
import a2 from '../assets/a2.jpg';
import a3 from '../assets/a3.jpeg';
import a4 from '../assets/a4.jpg';
import a5 from '../assets/a5.jpg';
import a6 from '../assets/a6.jpg';
import a7 from '../assets/a7.jpeg';
import a8 from '../assets/a8.jpg';
import a9 from '../assets/a9.jpg';
import a10 from '../assets/a10.webp';
import a11 from '../assets/a11.jpg';
import a12 from '../assets/a12.jpg';
import a13 from '../assets/a13.jpg';
import a14 from '../assets/a14.jpeg';
import a15 from '../assets/a15.webp';

const amenities = [
  { img: a1, label: "Premium Bed Quality" },
  { img: a2, label: "Exclusive Private Pool" },
  { img: a3, label: "Premium Tennis Court" },
  { img: a4, label: "Wi-Fi & Smart TV" },
  { img: a5, label: "Shower & Bathtub" },
  { img: a6, label: "Full Kitchen Facility" },
  { img: a7, label: "Exclusive Living Space" },
  { img: a8, label: "Green Garden" },
  { img: a9, label: "Ample Parking" },
  { img: a10, label: "24/7 Security" },
  { img: a11, label: "Fitness Center" },
  { img: a12, label: "Gaming Zone" },
  { img: a13, label: "Music Room" },
  { img: a14, label: "Yoga" },
  { img: a15, label: "Barbeque" },
];

export default function AllAmenities(){
  return (
    <div className="amen-section">
      <div className="amen-container">
        <div className="amen-headings">
          <div className="aham-sub">Amenities</div>
          <div className="aham-super">Discover a Lifestyle Beyond Ordinary</div>
        </div>
        <div className="amen-grid">
          {amenities.map((amenity, index) => (
            <div className="amen-box" data-aos="fade-in" key={index}>
              <img src={amenity.img} alt={amenity.label} className="amen-icon" />
              <p className="amen-label">{amenity.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

