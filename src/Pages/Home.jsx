import Hero from "../Components/Hero"
import ProjectHighlight from "../Components/ProjectHighlight"

import HomeContact from "../Components/HomeContact"
import Rewards from "../Components/Rewards"
import HomeTestimonials from "../Components/HomeTestimonials"
export default function Home()
{
    return(
        <>
        <Hero/>
        <ProjectHighlight/>
        {/* <Rewards/> */}
        <HomeTestimonials/>
        <HomeContact/>
        </>
    )
}