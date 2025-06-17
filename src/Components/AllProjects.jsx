import Iop1 from '../assets/op1.jpg'
import Iop2 from '../assets/op2.jpg'
import Iop3 from '../assets/op3.webp'

import Iup1 from '../assets/up1.jpg'
import Iup2 from '../assets/up2.png'
import Iup3 from '../assets/up3.jpg'

import Icp1 from '../assets/cp1.png'
import Icp2 from '../assets/cp2.jpg'
import Icp3 from '../assets/cp3.avif'
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
        "sub":"Green View Project Gaushala Road 2BHK",
        "adj" : advantages,
        "amnt": [2, 2, 803]
    }
    const op2 = {
        "image" : Iop2,
        "name":"Price Starts From 90 Lacs/-",
        "sub":"Green View Project Gaushala Road 3BHK",
        "adj" : advantages,
        "amnt": [3, 3, 1337]
    }
    const op3 = {
        "image" : Iop3,
        "name":"Price Starts From Rs 1.30 Cr/-",
        "sub":"Green View Project Gaushala Road 4BHK",
        "adj" : advantages,
        "amnt": [4, 4, 1783]
    }

// UpComing
const up1 = {
    "image" : Iup1,
    "name":"Price Starts From 45 Lacs/-",
    "sub":"Green View Project 2.0 Gaushala Road 2BHK",
    "adj" : advantages,
    "amnt": [2, 2, 803]
}
const up2 = {
    "image" : Iup2,
    "name":"Price Starts From Rs 1 Cr/-",
    "sub":"Green View Project 2.0 Gaushala Road 3BHK",
    "adj" : advantages,
    "amnt": [3, 3, 1337]
}
const up3 = {
    "image" : Iup3,
    "name":"Price Starts From Rs 1.45 Cr/-",
    "sub":"Green View Project 2.0 Gaushala Road 4BHK",
    "adj" : advantages,
    "amnt": [4, 4, 1783]
}


// Completed Project
const cp1 = {
    "image" : Icp1,
    "name":"Price Starts From 45 Lacs/-",
    "sub":"Green View Project 2.0 Gaushala Road 2BHK",
    "adj" : advantages,
    "amnt": [2, 2, 803]
}
const cp2 = {
    "image" : Icp2,
    "name":"Price Starts From Rs 1 Cr/-",
    "sub":"Green View Project 2.0 Gaushala Road 3BHK",
    "adj" :advantages,
    "amnt": [3, 3, 1337]
}
const cp3 = {
    "image" : Icp3,
    "name":"Price Starts From Rs 1.45 Cr/-",
    "sub":"Green View Project 2.0 Gaushala Road 4BHK",
    "adj" : advantages,
    "amnt": [4, 4, 1783]
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
                </div>
            </div>
            <div className="completed all-project">
                <div className="project-heading">
                <div className="ap-sub">Completed Project</div>
                    <div className="ap-super">Your Future Home Awaits, Stay Tuned!</div>
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