import '../public/About.css'
import ceo from '../assets/ceo.jpg'
export default function AboutCEO()
{
     return(
        <div className="AboutCEO">
            <div className="ceo-img">
                <img src={ceo} alt="" />
            </div>
            <div className="ceo-content">
                <div className="cc-sub">The Vision Behind Premium Real Estate in South Delhi</div>
                <div className="cc-super">Meet Naheem Ahmed</div>
                <div className="cc-content">
                Naheem Ahmed, the driving force behind our real estate journey, brings over 5 years of hands-on experience in crafting premium living spaces. With a strong focus on trust, quality construction, and timely delivery, he has set new benchmarks in the South Delhi real estate market. Specializing in DLF Farms and the Chhattarpur area, Naheem and his team are committed to delivering elegant, well-planned homes that reflect both luxury and reliability. What started as a vision has now grown into a trusted name for those seeking excellence in every square foot.
                </div>
            </div>
        </div>
     )
}