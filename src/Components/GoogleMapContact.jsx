import '../public/ContactUs.css'


export default function GoogleMapContact()
{
    return(
       <div className="GoogleMapContact">
        <div className="gm-mp">
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.7397228218265!2d77.18386847528346!3d28.48738407574434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1c1054973c9%3A0xd68f48b28f60aa17!2sDLF%20Farms%20Chattarpur!5e0!3m2!1sen!2sin!4v1749762157107!5m2!1sen!2sin"
        width="80%"
        height="500px"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Form"
        className='map'
      ></iframe>
        </div>
        <div className="gm-nears"></div>
       </div>
    )

}


