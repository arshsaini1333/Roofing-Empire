import '../public/ContactUs.css'

import CallIcon from '@mui/icons-material/Call';

export default function GoogleMapContact()
{
    return(
       <div className="GoogleMapContact">
        <div className="gm-mp">
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28051.65326228846!2d77.16529977467482!3d28.495905447301546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1e41ca7de7c1%3A0x921a88ef7354b930!2sChhatarpur%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1749888872984!5m2!1sen!2sin"
        
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Form"
        className='map'
      ></iframe>
    </div>
    <div className="cu-form-container" id="cu-form-container">
        <div className="cu-heading">
           <div className="cuh-sub">Leave Your Message</div>
           <div className="cuh-super">Book Your Site Visit Today! Let’s Help You Find Your Dream Home</div>
        </div>
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
        <button type='submit' className='sub-btn'><CallIcon className='callIcon' sx={{ fontSize: 25 }}/> <span>Request a Call Back</span></button>
        </div>
      </form>
    </div>
</div>
    
    )

}



