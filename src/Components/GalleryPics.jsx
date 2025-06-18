import '../public/Gallery.css'

// ✅ Import your gallery images
import g1 from '../assets/g1.webp';
import g2 from '../assets/g2.webp';
import g3 from '../assets/g3.webp';
import g4 from '../assets/g4.webp';
import g5 from '../assets/g5.webp';
import g6 from '../assets/g6.webp';
import g7 from '../assets/g7.webp';
import g8 from '../assets/g8.webp';
import g9 from '../assets/g9.webp';
import g10 from '../assets/g10.webp';
import g11 from '../assets/g11.webp';
import g12 from '../assets/g12.webp';
import g13 from '../assets/g13.webp';
import g14 from '../assets/g14.webp';
import g15 from '../assets/g15.webp';
import g16 from '../assets/g16.webp';
import g17 from '../assets/g17.webp';
import g18 from '../assets/g18.webp';
import g19 from '../assets/g19.webp';
import g20 from '../assets/g20.webp';
import g21 from '../assets/g21.webp';
import g22 from '../assets/g22.webp';
import g23 from '../assets/g23.webp';
import g24 from '../assets/g24.webp';

const galleryImages = [
  g1, g2, g3, g4, g5, g6, g7, g8, g9, g10,
  g11, g12, g13, g14, g15, g16, g17, g18, g19, g20
//   g21, g22, g23, g24,
];

export default function GalleryPics(){
  return (
    <div className="gallry" id="gallery">
      <div className="g-heading">
        <div className="g-sub">Gallery</div>
        <div className="g-super">Where Every Detail Speaks Luxury</div>
      </div>
      <div className="g-body">
        {galleryImages.map((image, index) => (
          <div className="g-card" data-aos="fade-in" key={index}>
            <img src={image} alt={`gallery ${index + 1}`} />
          </div>
        ))}
        
      </div>
    </div>
  );
};


