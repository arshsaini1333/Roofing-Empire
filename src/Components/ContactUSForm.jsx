import '../public/ContactUs.css'
import bg from '../assets/cu2.jpg'

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
        <span>+91 9876543210</span>
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
                <div className="cu-form-container" id="cu-form-container">
        
       <div className="cu-heading">
        
        <div className="cuh-super">Leave Your Message</div>
       </div>
       <div className="cuh-sub">We love to hear from you</div>
     
      <form className="cu-form" id="cu-form">
        <label htmlFor="cu-name">
          Name 
        </label>
        <input
          type="text"
          id="cu-name"
          className="cu-input"
          
          required
        />

        <label htmlFor="cu-email">
          Email 
        </label>
        <input
          type="email"
          id="cu-email"
          className="cu-input"
          
          required
        />


        <label htmlFor="cu-phone">
          Phone number
        </label>
        <input
          type="tel"
          id="cu-phone"
          className="cu-input"
          
          required
        />

        <label htmlFor="cu-comments">Message</label>
        <textarea
          id="cu-comments"
          className="cu-textarea"
         
        ></textarea>

        <div className="cuh-btn">
        <button type='submit' className='sub-btn'>Submit</button>
        </div>
      </form>
    </div>
            </div>
        </div>
    )
}