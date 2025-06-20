import Iop1 from '../assets/op1.jpg'
import Iop2 from '../assets/a1.jpeg'
import Iop3 from '../assets/a6.jpg'
import Iop4 from '../assets/a7.jpeg'

import Iup1 from '../assets/g3.webp'
import Iup2 from '../assets/g4.webp'
import Iup3 from '../assets/g5.webp'
import Iup4 from '../assets/g6.webp'

import Icp1 from '../assets/ambg1.jpg'
import Icp2 from '../assets/ambg2.jpg'
import Icp3 from '../assets/ambg4.jpg'
import ProjectCard from './ProjectCard'

import '../public/Project.css'
export default function AllProjects()
{
    //  Projects Data

    // Ongoing
    const advantages = ["🍽️ Modular Kitchen & Stylish Wardrobes", "🛗 Branded Lift", "🛀🏻 Cera Bath Fittings & Ceramic Tiles", "🚗 Stilt Car Parking + Gated Compound", "👮🏻‍♂️ Dual Security System"];
    const op1 = {
        "image" : Iop1,
        "name":"Price Starts From 50 Lacs/-",
        "sub":"Roofing Empire Project Gaushala Road 2BHK",
        "adj" : advantages,
        "amnt": ["2 BHK",  "803 sq ft"]
    }
    const op2 = {
        "image" : Iop2,
        "name":"Price Starts From 90 Lacs/-",
        "sub":"Roofing Empire Project Gaushala Road 3BHK",
        "adj" : advantages,
        "amnt": ["3 BHK", "1337 sq ft"]
    }
    const op3 = {
        "image" : Iop3,
        "name":"Price Starts From Rs 1.30 Cr/-",
        "sub":"Roofing Empire Project Gaushala Road 4BHK",
        "adj" : advantages,
        "amnt": ["4 BHK",  "1783 sq ft"]
    }
    
    const op4 = {
        "image" : Iop4,
        "name":"Price Starts From ₹50 Lacs/-",
        "sub":"Roofing Empire Project – 100ft Road 2BHK, 75 Sq. Yards",
        "adj" : ["🍽️ Modular Kitchen & Stylish Wardrobes", "🛗 Branded Lift", "🛀🏻 Cera Bath Fittings & Ceramic Tiles", "🚗 Stilt Car Parking + Gated Compound", "👮🏻‍♂️ Dual Security System", "📍 Prime Location on 100ft Road"], 
        "amnt": ["Prime Location", "Chhattarpur"]
    }

// UpComing
const up1 = {
    "image" : Iup1,
    "name":"Price Starts From 45 Lacs/-",
    "sub":"Roofing Empire Project 2.0 Gaushala Road 2BHK",
    "adj" : advantages,
    "amnt": ["2 BHK",  "803 sq ft"]
}
const up2 = {
    "image" : Iup2,
    "name":"Price Starts From Rs 1 Cr/-",
    "sub":"Roofing Empire Project 2.0 Gaushala Road 3BHK",
    "adj" : advantages,
    "amnt": ["3 BHK", "1337 sq ft"]
}
const up3 = {
    "image" : Iup3,
    "name":"Price Starts From Rs 1.45 Cr/-",
    "sub":"Roofing Empire Project 2.0 Gaushala Road 4BHK",
    "adj" : advantages,
    "amnt": ["4 BHK",  "1783 sq ft"]
}
const up4 = {
    "image" : Iup4,
    "name":"Price Starts From Rs 1.45 Cr/-",
    "sub":"Independent Kothi, 150 Sq. Yards",
    "adj" : ["🍽 Modular Kitchen & Premium Interiors",
        "🛗 Branded Lift (6-Person Capacity)",
        "🚿 Cera Bath Fittings & Ceramic Tiles",
        "🚗 Stilt Car Parking + Gated Compound",
        "🛡 Dual Security with CCTV Surveillance",
        "✍ Custom-Built Options Available",
        "📍 Prime Location in DLF Farms, Chhattarpur"
    ],
    "amnt": ["30 Ft Front", "Independent Plot"]
}


// Completed Project
const cp1 = {
    "image" : Icp1,
    "name":"Price Starts From 45 Lacs/-",
    "sub":"Roofing Empire Project 2.0 Gaushala Road 2BHK",
    "adj" : advantages,
    "amnt": ["2 BHK",  "803 sq ft"]
}
const cp2 = {
    "image" : Icp2,
    "name":"Price Starts From Rs 1 Cr/-",
    "sub":"Roofing Empire Project 2.0 Gaushala Road 3BHK",
    "adj" :advantages,
    "amnt": ["3 BHK", "1337 sq ft"]
}
const cp3 = {
    "image" : Icp3,
    "name":"Price Starts From Rs 1.45 Cr/-",
    "sub":"Roofing Empire Project 2.0 Gaushala Road 4BHK",
    "adj" : advantages,
    "amnt": ["4 BHK",  "1783 sq ft"]
}

    return(
        <div className="AllProjects">
            <div className="on-going all-project">
                <div className="project-heading">
                    <div className="ap-sub">Ongoing Project</div>
                    <div className="ap-super">Homes in Progress, Reserve Yours Now!</div>
                </div>
                <div className="projects">
                    <ProjectCard card={op1}/>
                    <ProjectCard card={op4}/>
                    <ProjectCard card={op2}/>
                    <ProjectCard card={op3}/>
                </div>
            </div>
            <div className="upcoming all-project">
                <div className="project-heading">
                <div className="ap-sub">Upcoming Project</div>
                    <div className="ap-super">Your Future Home Awaits, Stay Tuned!</div>
                </div>
                <div className="projects">
                <ProjectCard card={up1}/>
                <ProjectCard card={up2}/>
                <ProjectCard card={up3}/>
                <ProjectCard card={up4}/>
                </div>
            </div>
            <div className="completed all-project">
                <div className="project-heading">
                <div className="ap-sub">Completed Project</div>
                    <div className="ap-super">Delivered & Ready to Move In!</div>
                </div>
                <div className="projects">
                <ProjectCard card={cp1}/>
                <ProjectCard card={cp2}/>
               <ProjectCard card={cp3}/>
               </div>
            </div>
        </div>
    )
}