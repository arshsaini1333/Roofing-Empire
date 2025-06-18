import bg from '../assets/ambg5.jpg'
import '../public/Gallery.css'

export default function GalleryHero()
{
    return(
        <div className="galleryHero">
            <img src={bg} alt="" className='gallery-bg'/>
            <div className="gallery-head">
                    <p className='gallery-super'>Moments Captured in Every Corner</p>
                    {/* <p className='am-sub'>Exceptional Residences & Developments</p> */}
            </div>
        </div>
    )
}