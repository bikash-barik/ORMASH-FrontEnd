import { useState, useEffect } from 'react';
import './Home.css';
import axios from "axios";
import { APIURL } from "../../../Redux/APIURL";

function Slider({ interval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    async function fetchBanners() {
      try {
        const response = await axios.get(`${APIURL}/api/banners/`);
        setBanners(response.data.banners.map(banner => banner.banner));
      } catch (error) {
        console.error(error);
      }
    }

    fetchBanners();
  }, []);

  useEffect(() => {
    if (banners.length === 0) {
      return;
    }

    const timer = setInterval(() => {
      setIsZoomed(true);
      setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % banners.length);
        setIsZoomed(false);
      }, 1000);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [currentIndex, banners, interval]);


  return (
    <div className={`slider ${isZoomed ? 'zoom-in' : 'zoom-out'}`}>
      {banners.length > 0 && (
        <img
          src={banners[currentIndex]}
          alt={`Slider Image ${currentIndex + 1}`}
        />
      )}
      <div className="dots">
        {banners.map((_, index) => (
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
