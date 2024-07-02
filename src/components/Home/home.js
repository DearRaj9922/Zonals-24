import React from 'react';
import mapimg from '../../assets/India Map 1.webp';
import './home.css';

export default function Home() {
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
    </div>
  );
}
