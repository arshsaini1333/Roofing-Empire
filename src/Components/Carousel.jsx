import React, { useEffect, useState } from 'react';
import './Carousel.css';

const Carousel = ({ cards }) => {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  function getVisibleCount() {
    const width = window.innerWidth;
    if (width < 768) return 1;
    if (width < 1024) return 2;
    return 3;
  }

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [index, visibleCount]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const getSlideStyle = () => ({
    transform: `translateX(-${(index * 100) / visibleCount}%)`,
  });

  const extendedCards = [...cards, ...cards.slice(0, visibleCount)];

  return (
    <div className="carousel-wrapper">
      <button className="arrow left" onClick={prevSlide}>&#10094;</button>
      <div className="carousel-window">
        <div className="carousel-track" style={getSlideStyle()}>
          {extendedCards.map((card, i) => (
            <div className="carousel-card" key={i} style={{ flex: `0 0 ${100 / visibleCount}%` }}>
              {card}
            </div>
          ))}
        </div>
      </div>
      <button className="arrow right" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Carousel;
