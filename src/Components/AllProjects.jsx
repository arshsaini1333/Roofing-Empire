import Iop1 from '../assets/projectImages/img1.jpg'
import Iop2 from '../assets/projectImages/img2.jpg'
import Iop3 from '../assets/projectImages/img4.jpg'
import Iop4 from '../assets/projectImages/img5.jpg'

import Iup1 from '../assets/projectImages/img7.jpg'
import Iup2 from '../assets/projectImages/img10.jpg'
import Iup3 from '../assets/projectImages/img11.jpg'
import Iup4 from '../assets/projectImages/img3.jpg'

import Icp1 from '../assets/projectImages/img6.jpg'
import Icp2 from '../assets/projectImages/img8.jpg'
import Icp3 from '../assets/projectImages/img9.jpg'
import ProjectCard from './ProjectCard'

import Carousel from './Carousel'

import '../public/Project.css'
export default function AllProjects()
{
    //  Projects Data

    // Ongoing
    const advantages =["🍽️ Modular Kitchen & Stylish Wardrobes", "🛗 Branded Lift", "🛀🏻 Cera Bath Fittings & Ceramic Tiles", "🚗 Stilt Car Parking + Gated Compound", "👮🏻‍♂️ Dual Security System", "📍 Prime Location on 100ft Road"];
    const op1 = {
        "image" : Iop1,
        "name":"Price Starts From 50 Lacs/-",
        "sub":"Roofing Empires Project Gaushala Road 2BHK",
        "adj" : advantages,
        "amnt": ["2 BHK",  "803 sq ft"]
    }
    const op2 = {
        "image" : Iop2,
        "name":"Price Starts From 90 Lacs/-",
        "sub":"Roofing Empires Project Gaushala Road 3BHK",
        "adj" : advantages,
        "amnt": ["3 BHK", "1337 sq ft"]
    }
    const op3 = {
        "image" : Iop3,
        "name":"Price Starts From Rs 1.30 Cr/-",
        "sub":"Roofing Empires Project Gaushala Road 4BHK",
        "adj" : advantages,
        "amnt": ["4 BHK",  "1783 sq ft"]
    }
    
    const op4 = {
        "image" : Iop4,
        "name":"Price Starts From ₹50 Lacs/-",
        "sub":"Roofing Empires Project – 100ft Road",
        "adj" : advantages, 
        "amnt": ["2 BHK", "803 sq ft"]
    }

// UpComing
const up1 = {
    "image" : Iup1,
    "name":"Price Starts From 45 Lacs/-",
    "sub":"Roofing Empires Project 2.0 Gaushala Road 2BHK",
    "adj" : advantages,
    "amnt": ["2 BHK",  "803 sq ft"]
}
const up2 = {
    "image" : Iup2,
    "name":"Price Starts From Rs 1 Cr/-",
    "sub":"Roofing Empires Project 2.0 Gaushala Road 3BHK",
    "adj" : advantages,
    "amnt": ["3 BHK", "1337 sq ft"]
}
const up3 = {
    "image" : Iup3,
    "name":"Price Starts From Rs 1.45 Cr/-",
    "sub":"Roofing Empires Project 2.0 Gaushala Road 4BHK",
    "adj" : advantages,
    "amnt": ["4 BHK",  "1783 sq ft"]
}
const up4 = {
    "image" : Iup4,
    "name":"Price Starts From Rs 1.45 Cr/-",
    "sub":"Independent Kothi",
    "adj" : ["🍽️ Modular Kitchen & Stylish Wardrobes", "🛗 Branded Lift", "🛀🏻 Cera Bath Fittings & Ceramic Tiles", "🚗 Stilt Car Parking + Gated Compound", "👮🏻‍♂️ Dual Security System", "📍 Prime Location on 100ft Road", "🧱 30 Ft Front | Independent Plot"],
    "amnt": ["30 Ft Front", "1350 sq ft"]
}


// Completed Project
const cp1 = {
    "image" : Icp1,
    "name":"Price Starts From 45 Lacs/-",
    "sub":"Roofing Empires Project 2.0 Gaushala Road 2BHK",
    "adj" : advantages,
    "amnt": ["2 BHK",  "803 sq ft"]
}
const cp2 = {
    "image" : Icp2,
    "name":"Price Starts From Rs 1 Cr/-",
    "sub":"Roofing Empires Project 2.0 Gaushala Road 3BHK",
    "adj" :advantages,
    "amnt": ["3 BHK", "1337 sq ft"]
}
const cp3 = {
    "image" : Icp3,
    "name":"Price Starts From Rs 1.45 Cr/-",
    "sub":"Roofing Empires Project 2.0 Gaushala Road 4BHK",
    "adj" : advantages,
    "amnt": ["4 BHK",  "1783 sq ft"]
}



const card1 = [
    <ProjectCard card={op1} />,
    <ProjectCard card={op2} />,
    <ProjectCard card={op3} />,
    <ProjectCard card={op4} />,
  ];

const card2 = [
<ProjectCard card={up1}/>,
<ProjectCard card={up2}/>,
<ProjectCard card={up3}/>,
<ProjectCard card={up4}/>,
]
const card3 = [
    <ProjectCard card={cp1}/>,
                <ProjectCard card={cp2}/>,
               <ProjectCard card={cp3}/>
]
    return(
        <div className="AllProjects">
            <div className="on-going all-project">
                <div className="project-heading" data-aos="fade-up" >
                    <div className="ap-sub">Ongoing Project</div>
                    <div className="ap-super">Homes in Progress, Reserve Yours Now!</div>
                </div>
                <Carousel cards={card1} />
            </div>
            <div className="upcoming all-project">
                <div className="project-heading" data-aos="fade-up">
                <div className="ap-sub">Upcoming Project</div>
                    <div className="ap-super">Your Future Home Awaits, Stay Tuned!</div>
                </div>
                <Carousel cards={card2} />
                
            </div>
            <div className="completed all-project">
                <div className="project-heading" data-aos="fade-up">
                <div className="ap-sub">Completed Project</div>
                    <div className="ap-super">Delivered & Ready to Move In!</div>
                </div>
                <Carousel cards={card3} />
            </div>
        </div>
    )
}