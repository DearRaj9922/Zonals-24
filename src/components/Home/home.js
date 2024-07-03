import React, { useEffect, useState } from "react";
import { useNavigate,Links } from "react-router-dom";
import mapimg from "../../assets/India Map 1.webp";
import "./home.css";
import zonaltext from "../../assets/Zonalstext.webp";
import thomsologo from "../../assets/logo.png";

export default function Home() {

const navigate=useNavigate();

  const [animate, setAnimate] = useState(false);
  const [jaipurButtonHovered, setJaipurButtonHovered] = useState(false);
  const [chandigarhButtonHovered, setChandigarhButtonHovered] = useState(false);
  const [lucknowButtonHovered, setLucknowButtonHovered] = useState(false);
  const [bangloreButtonHovered, setBangloreButtonHovered] = useState(false);

  useEffect(() => {
    document.body.classList.add("blur");
    const timer = setTimeout(() => {
      setAnimate(true);
      document.body.classList.remove("blur");
    }, 2000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = (areaClass) => {
    document.body.classList.add(areaClass);
    if (areaClass === "zoom-area1") {
      setJaipurButtonHovered(true); // State to track if area1 is hovered
    } else if (areaClass === "zoom-area2") {
      setChandigarhButtonHovered(true); // State to track if area2 is hovered
    } else if (areaClass === "zoom-area3") {
      setLucknowButtonHovered(true); // State to track if area3 is hovered
    } else if (areaClass === "zoom-area4") {
      setBangloreButtonHovered(true);
    }
  };

  const handleMouseLeave = (areaClass) => {
    document.body.classList.remove(areaClass);
    if (areaClass === "zoom-area1") {
      setJaipurButtonHovered(false); // Reset state when area1 is not hovered
    } else if (areaClass === "zoom-area2") {
      setChandigarhButtonHovered(false); // State to track if area2 is hovered
    } else if (areaClass === "zoom-area3") {
      setLucknowButtonHovered(false); // State to track if area3 is hovered
    } else if (areaClass === "zoom-area4") {
      setBangloreButtonHovered(false);
    }
  };
  const handleJaipurHover = () => {
    setJaipurButtonHovered(true);
    handleMouseEnter("zoom-area1");
  };

  const handleJaipurLeave = () => {
    setJaipurButtonHovered(false);
    handleMouseLeave("zoom-area1");
  };

  const handleChandigarhHover = () => {
    setChandigarhButtonHovered(true);
    handleMouseEnter("zoom-area2");
  };

  const handleChandigarhLeave = () => {
    setChandigarhButtonHovered(false);
    handleMouseLeave("zoom-area2");
  };

  const handleLucknowHover = () => {
    setLucknowButtonHovered(true);
    handleMouseEnter("zoom-area3");
  };

  const handleLucknowLeave = () => {
    setLucknowButtonHovered(false);
    handleMouseLeave("zoom-area3");
  };

  const handleBangloreHover = () => {
    setBangloreButtonHovered(true);
    handleMouseEnter("zoom-area4");
  };

  const handleBangloreLeave = () => {
    setBangloreButtonHovered(false);
    handleMouseLeave("zoom-area4");
  };

  return (
    <div className="body">
      <img src={mapimg} className="map-img" alt="map-img-bg" />
      <div className="area">
        <div
          className="area1"
          onClick={()=>window.open('/jaipur','_blank')}
          onMouseEnter={() => handleMouseEnter("zoom-area1")}
          onMouseLeave={() => handleMouseLeave("zoom-area1")}
        ></div>
        <div
          className="area2"
          onClick={()=>window.open('/chandigarh','_blank')}
          onMouseEnter={() => handleMouseEnter("zoom-area2")}
          onMouseLeave={() => handleMouseLeave("zoom-area2")}
        ></div>
        <div
          className="area3"
          onClick={()=>window.open('/lucknow','_blank')}
          onMouseEnter={() => handleMouseEnter("zoom-area3")}
          onMouseLeave={() => handleMouseLeave("zoom-area3")}
        ></div>
        <div
          className="area4"
          onClick={()=>window.open('/banglore','_blank')}
          onMouseEnter={() => handleMouseEnter("zoom-area4")}
          onMouseLeave={() => handleMouseLeave("zoom-area4")}
        ></div>
      </div>
      <div className="button-section">
        <div className="logo-thomso">
          <img src={thomsologo} onClick={()=>navigate('/')} className="thomso-img" alt="tho-logo" />
        </div>
        <div className={`zonalstext ${animate ? "scale-down" : ""}`}>
          <img
            src={zonaltext}
            className="zonals-text"
            alt="zonalstext"
            style={{ animation: "popUp 2s forwards" }}
          />
        </div>
        <div className={`buttons ${animate ? "scale-down" : ""}`}>
          <button
            className={`jaipur ${jaipurButtonHovered ? "enlarged" : ""}`}
            // onMouseEnter={handleJaipurHover}
            // onMouseLeave={handleJaipurLeave}
            onClick={()=>window.open('/jaipur')}
          >
            Jaipur
          </button>
          <button
            className={`chandigarh ${
              chandigarhButtonHovered ? "enlarged" : ""
            }`}
            // onMouseEnter={handleChandigarhHover}
            // onMouseLeave={handleChandigarhLeave}
            onClick={()=>window.open('/chandigarh')}
          >
            Chandigarh
          </button>
          <button
            className={`lucknow ${lucknowButtonHovered ? "enlarged" : ""}`}
            // onMouseEnter={handleLucknowHover}
            // onMouseLeave={handleLucknowLeave}
            onClick={()=>window.open('/lucknow')}
          >
            Lucknow
          </button>
          <button
            className={`banglore ${bangloreButtonHovered ? "enlarged" : ""}`}
            // onMouseEnter={handleBangloreHover}
            // onMouseLeave={handleBangloreLeave}
            onClick={()=>window.open('/banglore')}
          >
            Banglore
          </button>
        </div>
      </div>
    </div>
  );
}
