
import '../public/Home.css'
import bgvdo from '../assets/bgvdo.mp4'
export default function Hero()
{
    return(
      
      <div className="home-container">
      <video className="background-video" autoPlay loop muted playsInline>
        <source src={bgvdo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="home-content">
        <h1>Welcome to Our Premium Real Estate</h1>
        <p>Find your dream property today.</p>
        <button>Explore Now</button>
      </div>
    </div>
      
    )
}