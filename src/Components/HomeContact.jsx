import '../public/Home.css';
import img from '../assets/contactForm.jpeg';
import { useState } from 'react';

export default function HomeContact() {
  const scriptURL =
    'https://script.google.com/macros/s/AKfycbzt9UpvROsjUYlILwpWgzGdW-lQJl9kxxMoinVgj9DTgVLLPyVn2A_icK8AaYNGW_ka/exec';

  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    const fullName = `${formData.fName} ${formData.lName}`;
    const postData = new FormData();
    postData.append('name', fullName);
    postData.append('email', formData.email);
    postData.append('phone', formData.phone);
    postData.append('msg', formData.message);

    fetch(scriptURL, {
      method: 'POST',
      body: postData,
      mode: 'no-cors'
    })
      .then(() => {
        setMessage('Form submitted successfully!');
        setSubmitting(false);
        setFormData({ fName: '', lName: '', email: '', phone: '', message: '' });
      })
      .catch(() => {
        setMessage('Error submitting the form. Try again.');
        setSubmitting(false);
      });
  };

  return (
    <div className="HomeContact" data-aos="fade-up">
      <div className="subContainer">
        <div className="image-container">
          <img src={img} alt="contact" />
        </div>
        <div className="form-container">
          <div className="ch-heading">
            <div className="ch-sub">Get in Touch</div>
            <div className="ch-super">Let's Make Your Property Journey Effortless</div>
          </div>
          <form className="ch-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fName">First Name</label>
                <input
                  type="text"
                  id="fName"
                  name="fName"
                  value={formData.fName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lName">Last Name</label>
                <input
                  type="text"
                  id="lName"
                  name="lName"
                  value={formData.lName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">What Can We Help You With?</label>
              <textarea
                id="message"
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className={submitting ? 'blur-bt' : ''}>
              {submitting ? 'Submitting...' : 'Book a Call'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
