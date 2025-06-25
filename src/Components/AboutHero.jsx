// import bg from '../assets/ph1.jpg'
import bg from '../assets/aboutBG1.jpg'

import '../public/About.css'
export default function AboutHero()
{
    return(
        <div className="AboutHero">
            <img src={bg} alt="" className='about-bg'/>
            <div className="about-head">
                    <div className='ah-super'>Your Vision, Our Expertise</div>
                    <div className='ah-sub'> Crafting Dream Homes with Trust & Precision</div>
            </div>
        </div>
    )
}