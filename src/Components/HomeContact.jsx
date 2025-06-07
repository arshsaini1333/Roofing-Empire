import '../public/Home.css'

export default function HomeContact()
{
    return(
        <div className="HomeContact">
      <div className="form-container">
      <div className="ch-heading">
                <div className="ch-sub">Get in Touch</div>
                <div className="ch-super">Let's Make Your Property Journey Effortless</div>
            </div>
        <form className='ch-form'>
          <div className="form-row">
            <input type="text" placeholder="First Name"  required/>
            <input type="text" placeholder="Last Name"  required/>
          </div>
          <div className="form-row">
            <input type="email" placeholder="Email" required/>
            <input type="tel" placeholder="Phone" required/>
          </div>
          <textarea placeholder="What Can We Help You ?" rows="3" required></textarea>
          <button type="submit">Book a Call</button>
        </form>
      </div>
    </div>
    )
}