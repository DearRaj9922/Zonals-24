import React, { useEffect, useState } from 'react';
import mapimg from '../../assets/India Map 1.webp';
import './home.css';
import zonaltext from "../../assets/Zonalstext.webp";
import thomsologo from "../../assets/logo.png";

export default function Home() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    document.body.classList.add('blur');
    const timer = setTimeout(() => {
      setAnimate(true);
      document.body.classList.remove('blur');
    }, 2000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = (areaClass) => {
    document.body.classList.add(areaClass);
  };

  const handleMouseLeave = (areaClass) => {
    document.body.classList.remove(areaClass);
  };

  return (
    <div className="body">
      <img src={mapimg} className="map-img" alt="map-img-bg" />
      <div className="area">
        <div
          className="area1"
          onMouseEnter={() => handleMouseEnter('zoom-area1')}
          onMouseLeave={() => handleMouseLeave('zoom-area1')}
        ></div>
        <div
          className="area2"
          onMouseEnter={() => handleMouseEnter('zoom-area2')}
          onMouseLeave={() => handleMouseLeave('zoom-area2')}
        ></div>
        <div
          className="area3"
          onMouseEnter={() => handleMouseEnter('zoom-area3')}
          onMouseLeave={() => handleMouseLeave('zoom-area3')}
        ></div>
        <div
          className="area4"
          onMouseEnter={() => handleMouseEnter('zoom-area4')}
          onMouseLeave={() => handleMouseLeave('zoom-area4')}
        ></div>
      </div>
      <div className="button-section">
        <div className="logo-thomso">
          <img src={thomsologo} className='thomso-img' alt='tho-logo'/>
        </div>
      <div className={`zonalstext ${animate ? 'scale-down' : ''}`}>
        <img src={zonaltext} className="zonals-text" alt="zonalstext" style={{ animation: 'popUp 2s forwards' }} />
      </div>
      <div className={`buttons ${animate ? 'scale-down' : ''}`}>
        <button className='jaipur'>Jaipur</button>
        <button className='chandigarh'>Chandigarh</button>
        <button className='lucknow'>Lucknow</button>
        <button className='banglore'>Banglore</button>
      </div>
      </div>
    </div>
  );
}
