import React from "react";
import "../public/About.css";

// MUI Icons
import ConstructionIcon from "@mui/icons-material/Construction";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import StarIcon from "@mui/icons-material/Star";
import HomeWorkIcon from "@mui/icons-material/HomeWork";

const features = [
  {
    icon: <ConstructionIcon style={{ fontSize: 50, color: "#a27e27" }} />,
    title: "Quality Construction, No Compromise",
    description:
      "Every home is built using premium materials with expert workmanship — ensuring strength, durability, and long-term value.",
  },
  {
    icon: <LocationOnIcon style={{ fontSize: 50, color: "#a27e27" }} />,
    title: "Prime South Delhi Locations",
    description:
      "From Chhattarpur to DLF Farms — live close to metro stations, schools, hospitals, markets, and city connections.",
  },
  {
    icon: <ReceiptLongIcon style={{ fontSize: 50, color: "#a27e27" }} />,
    title: "Clear Pricing, No Hidden Costs",
    description:
      "What you see is what you get — all costs are discussed upfront with complete honesty and transparency.",
  },
  {
    icon: <PhoneInTalkIcon style={{ fontSize: 50, color: "#a27e27" }} />,
    title: "Instant Site Visits & Quick Response",
    description:
      "We offer same-day property visits, quick WhatsApp replies, and personal assistance throughout the buying process.",
  },
  {
    icon: <StarIcon style={{ fontSize: 50, color: "#a27e27" }} />,
    title: "150+ Happy Buyers Served",
    description:
      "Our success is built on referrals and repeat customers — because our clients love the way we work.",
  },
  {
    icon: <HomeWorkIcon style={{ fontSize: 50, color: "#a27e27" }} />,
    title: "Flexible Options: 2BHK, 3BHK & Plots",
    description:
      "We have something for everyone — ready-to-move floors, custom-built options, and plots to build your own dream home.",
  },
];

export default function WhyChooseUs(){
  return (
    <div className="why-choose-us" >
      <h2 data-aos="fade-up">Why Choose Roofing Empires?</h2>
      
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index} data-aos="fade-up">
            <div className="icon-wrapper">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

