import React from 'react';
import '../public/HomeTestimonials.css';
import CounterCircle from './CounterCircle';
import CallIcon from '@mui/icons-material/Call';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
const testimonials = [
  {
    name: "Rajat Arora",
    location: "New Delhi",
    msg: "Buying a villa through Roofing Empire was the best decision we made. The location in Chhattarpur is peaceful, and the quality is top-notch. Their team is extremely professional and transparent!"
  },
  {
    name: "Ankita Mehra",
    location: "Saket",
    msg: "We were looking for a reliable developer in South Delhi and Roofing Empire exceeded all expectations. From site visits to paperwork – smooth and stress-free!"
  },
  {
    name: "Prateek Bansal",
    location: "Gurugram",
    msg: "Their DLF Farms project is pure luxury. It’s rare to find such premium quality with timely delivery in Delhi. Highly recommended!"
  },
  {
    name: "Kunal Sharma",
    location: "Vasant Kunj",
    msg: "I invested in a plot with Roofing Empire last year and have already seen great appreciation. Their team’s market knowledge is excellent."
  },
  {
    name: "Divya Kapoor",
    location: "Chhattarpur",
    msg: "As a first-time homebuyer, I had many doubts. But Roofing Empire guided me through every step with patience and clarity. Truly trustworthy people."
  },
  {
    name: "Anil & Seema Grover",
    location: "South Delhi",
    msg: "We shifted to our new 3BHK flat in their low-rise project last month – beautiful interiors, peaceful surroundings, and great connectivity."
  },
  {
    name: "Simran Chadha",
    location: "Panchsheel Park",
    msg: "What I loved most was their honesty – no hidden charges, no delays, and regular updates. Roofing Empire delivers what they promise."
  },
  {
    name: "Siddharth Taneja",
    location: "Hauz Khas",
    msg: "I’ve worked with many developers, but Roofing Empire stands out for their ethics, clear titles, and premium construction quality."
  },
  {
    name: "Megha Suri",
    location: "CR Park",
    msg: "From paperwork to possession, it was a seamless experience. Their customer service is unmatched in Delhi’s real estate scene."
  },
  {
    name: "Rohit Malhotra",
    location: "Punjabi Bagh",
    msg: "We wanted a farmhouse near Delhi and Roofing Empire helped us find the perfect one in DLF Farms. Great value and no compromise on quality!"
  }
];

const splitColumns = (data, columns) => {
  const result = Array.from({ length: columns }, () => []);
  data.forEach((item, index) => {
    result[index % columns].push(item);
  });
  return result;
};

const TestimonialCard = ({ name, location, msg }) => (
  <div className="testimonial-card">
    <div className="stars">★★★★★</div>
    <div className="name">{name}</div>
    <div className="location">{location}</div>
    <p className="message">{msg}</p>
  </div>
);

const HomeTestimonials = () => {
  const columns = splitColumns(testimonials, 3);

  return (
    <div className="testimonial-wrapper">
      <div className="text-block">
        <div className='ht-sub'>What Our Clients Say</div>
        <div className='ht-super'>Trusted By Many, Loved By All</div>
        
        <div className="left-column">
       <CounterCircle target={200} label="Projects" />
       <CounterCircle target={50} label="Happy Clients" />
      <CounterCircle target={50} label="Project Value" suffix="L" />
      </div>
 <p><FormatQuoteIcon className='fq-start fq'/>Our clients’ success stories reflect our commitment to excellence. See how we’ve helped them find their dream homes, sustainable investments, and perfect getaways.<FormatQuoteIcon className='fq'/></p>
      <div className="ht-cta">
        <button><span>Enquire Now</span> <CallIcon className='callIcon' sx={{ fontSize: 25 }}/></button>
      </div>
      
  
      </div>
      <div className="columns">
        {columns.map((col, index) => (
          <div
            key={index}
            className={`column ${index % 2 === 0 ? 'scroll-up' : 'scroll-down'}`}
          >
            <div className="column-inner">
              {col.map((item, idx) => (
                <TestimonialCard key={idx} {...item} />
              ))}
              {col.map((item, idx) => (
                <TestimonialCard key={idx + '-copy'} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeTestimonials;
