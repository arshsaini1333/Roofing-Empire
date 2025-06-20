import '../public/Home.css'
import CallMadeIcon from '@mui/icons-material/CallMade';
import { useNavigate } from 'react-router';
export default function ProjectHighlight()
{
    const navigate = useNavigate();
    return(
       
        <div className="ProjectHighLight">
            <div className="ph-heading">
                <div className="ph-left">
                    {/* <div className="ph-sub">Signature Highlights</div> */}
                    <div className="ph-super">
                    Invest in Trusted Quality
                    </div>
                </div>
                <div className="ph-right">
                    <button onClick={()=>{navigate('/project')}}><span>View All Projects</span> <CallMadeIcon/> </button>
                </div>
            </div>
            <div className="ph-content">
                <div className="ph-card ph-card1">
                    <div className="upper-content">2BHK to 4BHK</div>
                    <div className="lower-content">
                    <h3>🏡 2BHK to 4BHK Residences</h3>
                    <p>Choose from thoughtfully designed 2BHK, 3BHK, and spacious 4BHK homes, crafted to suit modern living needs with premium fittings and elegant layouts.</p>
                    </div>
                </div>
                <div className="ph-card ph-card2">
                <div className="upper-content">₹50L–₹1.5Cr</div>
                    <div className="lower-content">
                    <h3>💰 ₹50 Lakhs – ₹1.5 Crores</h3>
                    <p>Flexible pricing options to match your lifestyle — from smart affordable units to luxurious residences, starting at ₹50 Lakhs and going up to ₹1.5 Crores.</p>
                    </div>
                </div>
                <div className="ph-card ph-card3">
                <div className="upper-content">100–1000 sq yd plots</div>
                    <div className="lower-content">
                        <h3>📏 100–1000 sq. yd. Plots</h3>
                        <p>Build your dream home on spacious plots ranging from 100 to 1000 square yards, offering ample space and flexibility to bring your vision to life.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}