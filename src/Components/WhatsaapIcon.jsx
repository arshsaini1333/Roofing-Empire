// WhatsAppButton.jsx

import React from 'react';

export default function WhatsaapIcon(){
  const phoneNumber = '919999200048'; // Replace with your number
  const message = encodeURIComponent('Hi, I would like to know more!');
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  const handleClick = () => {
    window.open(whatsappLink, '_blank');
  };

  return (
    <button 
      onClick={handleClick} 
      style={styles.button}
      aria-label="Chat on WhatsApp"
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
        alt="WhatsApp"
        style={styles.icon}
      />
    </button>
  );
};

const styles = {
  button: {
    position: 'fixed',
    bottom: '20px',
    left: '20px',
    backgroundColor: '#25D366',
    border: 'none',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  icon: {
    width: '35px',
    height: '35px',
  },
};


