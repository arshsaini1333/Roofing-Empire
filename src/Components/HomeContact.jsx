import '../public/Home.css'
import img from '../assets/contactForm.jpeg'
export default function HomeContact()
{
    return(
      <div className="HomeContact" data-aos="fade-up">
      <div className="subContainer">
      <div className="image-container">
        <img src={img} alt="" />
      </div>
      <div className="form-container">
      <div className="ch-heading">
                <div className="ch-sub">Get in Touch</div>
                <div className="ch-super">Let's Make Your Property Journey Effortless</div>
            </div>
            <form className='ch-form'>
  <div className="form-row">
    <div className="form-group">
      <label htmlFor="fName">First Name</label>
      <input type="text" id="fName" name="fName" required />
    </div>
    <div className="form-group">
      <label htmlFor="lName">Last Name</label>
      <input type="text" id="lName" name="lName" required />
    </div>
  </div>

  <div className="form-row">
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required />
    </div>
    <div className="form-group">
      <label htmlFor="phone">Phone</label>
      <input type="tel" id="phone" name="phone" required />
    </div>
  </div>

  <div className="form-group">
    <label htmlFor="message">What Can We Help You With?</label>
    <textarea id="message" name="message" rows="3" required></textarea>
  </div>

  <button type="submit">Book a Call</button>
</form>

      </div>
      </div>
    </div>
    )
}