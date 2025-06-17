import bg from '../assets/projects.jpg'
import '../public/Project.css'
export default function HeroProject(){
    return(
        <div className="HeroProject">
            <img src={bg} alt="" className='project-bg'/>
            <div className="project-head">
                    <p className='pp-super'>Explore Our Signature Projects</p>
                    <p className='pp-sub'>Exceptional Residences & Developments</p>
            </div>
        </div>
    )
}