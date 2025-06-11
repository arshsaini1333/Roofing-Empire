import Hero from "../Components/Hero"
import ProjectHighlight from "../Components/ProjectHighlight"

import HomeContact from "../Components/HomeContact"
import Rewards from "../Components/Rewards"
import HomeTestimonials from "../Components/HomeTestimonials"
import Footer from "../Components/Footer"
export default function Home()
{
    return(
        <>
        <Hero/>
        <ProjectHighlight/>
        {/* <Rewards/> */}
        <HomeTestimonials/>
        <HomeContact/>
        <Footer/>
        </>
    )
}