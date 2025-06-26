import '../public/Thankyou.css'
import img from '../assets/thank.jpg'
import { useNavigate } from 'react-router'
export default function ThankyouCompo(){
    const navigate = useNavigate();
    function handle()
    {
        navigate('/project')
    }
    return(
        <div className="ThankyouHero">
            <img src={img} alt="" className='thankyou-bg'/>
            <div className="thankyou-head">
                    <div className='th-super' data-aos="fade-up">Thank You for Reaching Out!</div>
                    <div className='th-sub' data-aos="fade-up"> We appreciate your message. Our team will get back to you shortly.</div>
                    <button onClick={handle} data-aos="fade-up">View Our Projects</button>
            </div>
        </div>
    )

}
