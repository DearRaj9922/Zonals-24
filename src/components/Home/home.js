import React, { useState, useEffect, useRef } from 'react';
import './home.css';
import mapimg from "../../assets/India Map 1.webp";
import mapimgArea1 from "../../assets/jaipur.webp"; // Image for area 1
// import mapimgArea2 from "../../assets/India Map Area2.webp"; // Image for area 2

const Home = () => {
  const [currentImage, setCurrentImage] = useState(mapimg);
  const [fadeClass, setFadeClass] = useState('fade-in');
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const imageRef = useRef(null);

  const handleMouseOver = (area) => {
    // setFadeClass('fade-out');
    setTimeout(() => {
      if (area === 'area1') {
        setCurrentImage(mapimgArea1);
      } 
    //   else if (area === 'area2') {
    //     setCurrentImage(mapimgArea2);
    //   }
      setFadeClass('fade-in');
    }, 300); // Duration of the fade-out transition
  };

  const handleMouseOut = () => {
    // setFadeClass('fade-out');
    setTimeout(() => {
      setCurrentImage(mapimg);
      setFadeClass('fade-in');
    }, 300); // Duration of the fade-out transition
  };

  useEffect(() => {
    const updateImageSize = () => {
      if (imageRef.current) {
        setImageSize({
          width: imageRef.current.offsetWidth,
          height: imageRef.current.offsetHeight,
        });
      }
    };
    
    window.addEventListener('resize', updateImageSize);
    updateImageSize(); // Initial call to set size

    return () => {
      window.removeEventListener('resize', updateImageSize);
    };
  }, []);

  const calculateRectCoords = (coords) => {
    const [x1, y1, x2, y2] = coords;
    return [
      x1 * imageSize.width / 1000,
      y1 * imageSize.height / 1000,
      x2 * imageSize.width / 1000,
      y2 * imageSize.height / 1000,
    ].join(',');
  };

  const calculateCircleCoords = (coords) => {
    const [cx, cy, r] = coords;
    return [
      cx * imageSize.width / 1000,
      cy * imageSize.height / 1000,
      r * Math.min(imageSize.width, imageSize.height) / 1000
    ].join(',');
  };

  return (
    <div className="map-container">
      <img
        ref={imageRef}
        src={currentImage}
        useMap="#map"
        alt="Interactive Map"
        id="map-image"
        className={fadeClass}
      />
      <map name="map">
        <area
          shape="circle"
          coords={calculateCircleCoords([300,400,150])}
          alt="Area 1"
          href="/page1"
          className="map-area"
          onMouseOver={() => handleMouseOver('area1')}
          onMouseOut={handleMouseOut}
        />
        <area
          shape="circle"
          coords={calculateCircleCoords([250, 100, 50])}
          alt="Area 2"
          href="/page2"
          className="map-area"
          onMouseOver={() => handleMouseOver('area2')}
          onMouseOut={handleMouseOut}
        />
        {/* Add more areas as needed */}
      </map>
    </div>
  );
};

export default Home;
