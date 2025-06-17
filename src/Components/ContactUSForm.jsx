import '../public/ContactUs.css'
import bg from '../assets/ccbg.avif'

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function ContactUSForm()
{
    return(
        <div className="ContactUS">
            <img src={bg} alt="" className='cu-bg'/>
            <div className="cu-contetn">
                <div className="contact-information"><h2 className="cu-contact-heading">Contact Us</h2>
      <p className="cu-contact-subtext">
        If you have any questions, feel free to get in touch with us.
      </p>

      <div className="cu-contact-item">
        <PhoneIcon className="cu-contact-icon" />
        <span>+91 9999200048</span>
      </div>

      <div className="cu-contact-item">
        <EmailIcon className="cu-contact-icon" />
        <span>hello@roofingempire.com</span>
      </div>

      <div className="cu-contact-item">
        <LocationOnIcon className="cu-contact-icon" />
        <span>DLF Farms, Chhattarpur, South Delhi</span>
      </div>
      <div className="cui-btns">
      <button className="cu-whatsapp-btn">
      <WhatsAppIcon className="cu-whatsapp-icon" />
      <span>Let's Chat</span>
    </button>
    <button className='cui-bt'>Book Free Site Visit</button>
      </div>
    </div>
        </div>
        </div>
    )
}