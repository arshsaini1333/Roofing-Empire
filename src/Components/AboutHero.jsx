import bg from '../assets/ph1.jpg'
import '../public/About.css'
export default function AboutHero()
{
    return(
        <div className="AboutHero">
            <img src={bg} alt="" className='about-bg'/>
            <div className="about-head">
                    <p>We Build Your Dream House</p>
            </div>
        </div>
    )
}