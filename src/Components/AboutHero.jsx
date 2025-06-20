// import bg from '../assets/ph1.jpg'
import bg from '../assets/aboutBG1.jpg'

import '../public/About.css'
export default function AboutHero()
{
    return(
        <div className="AboutHero">
            <img src={bg} alt="" className='about-bg'/>
            <div className="about-head">
                    <p>Your Vision, Our Expertise – Crafting Dream Homes with Trust & Precision</p>
            </div>
        </div>
    )
}