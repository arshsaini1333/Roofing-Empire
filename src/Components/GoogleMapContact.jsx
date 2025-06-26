import '../public/ContactUs.css';
import CallIcon from '@mui/icons-material/Call';
import { useState } from 'react';
import { useNavigate } from 'react-router';
export default function GoogleMapContact() {
  const scriptURL =
    'https://script.google.com/macros/s/AKfycbzt9UpvROsjUYlILwpWgzGdW-lQJl9kxxMoinVgj9DTgVLLPyVn2A_icK8AaYNGW_ka/exec';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    const postData = new FormData();
    postData.append('name', formData.name);
    postData.append('email', formData.email);
    postData.append('phone', formData.phone);
    postData.append('msg', formData.message);

    fetch(scriptURL, {
      method: 'POST',
      body: postData,
      mode: 'no-cors'
    })
      .then(() => {
        setMessage("Form submitted successfully!");
        setSubmitting(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
        navigate('/thankyou')
      })
      .catch(() => {
        setMessage("Error submitting the form. Try again.");
        setSubmitting(false);
      });
  };

  return (
    <div className="GoogleMapContact" data-aos="fade-up">
      <div className="gm-mp">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28051.65326228846!2d77.16529977467482!3d28.495905447301546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1e41ca7de7c1%3A0x921a88ef7354b930!2sChhatarpur%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1749888872984!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Form"
          className="map"
        ></iframe>
      </div>

      <div className="cu-form-container" id="cu-form-container">
        <div className="cu-heading">
          <div className="cuh-sub">Leave Your Message</div>
          <div className="cuh-super">
            Book Your Site Visit Today! Let’s Help You Find Your Dream Home
          </div>
        </div>

        <form className="cu-form" id="cu-form" onSubmit={handleSubmit}>
          <label htmlFor="cu-name">Name</label>
          <input
            type="text"
            name="name"
            id="cu-name"
            className="cu-input"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="cu-email">Email</label>
          <input
            type="email"
            name="email"
            id="cu-email"
            className="cu-input"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="cu-phone">Phone number</label>
          <input
            type="tel"
            name="phone"
            id="cu-phone"
            className="cu-input"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label htmlFor="cu-comments">Message</label>
          <textarea
            id="cu-comments"
            name="message"
            className="cu-textarea"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <div className="cuh-btn">
          <button type="submit" id="contactSubmit" className={`sub-btn ${submitting ? 'blur-bt' : ''}`}>
          <CallIcon className="callIcon" sx={{ fontSize: 25 }} />{' '}
              <span>Request a Call Back</span>
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
}
