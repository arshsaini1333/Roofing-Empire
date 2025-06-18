import bg from '../assets/ambg7.jpg'
import '../public/Amenties.css'

export default function AmentiesHero()
{
    return(
        <div className="HeroAmen">
            <img src={bg} alt="" className='amen-bg'/>
            <div className="amen-head">
                    <p className='am-super'>Elevate Your Lifestyle with World-Class Amenities</p>
                    {/* <p className='am-sub'>Exceptional Residences & Developments</p> */}
            </div>
        </div>
    )
}