import { useState, useEffect } from 'react';
import './Home.css';

function Slider({ images, interval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsZoomed(true);
      setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % images.length);
        setIsZoomed(false);
      }, 1000);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [currentIndex, images.length, interval]);

  return (
    <div className={`slider ${isZoomed ? 'zoom-in' : 'zoom-out'}`}>
      {images.length > 0 && (
        <img
          src={images[currentIndex]}
          alt={`Slider Image ${currentIndex + 1}`}
        />
      )}
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={currentIndex === index ? 'active' : ''}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
