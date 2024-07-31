import React, { useEffect, useState } from "react";
import ham from "../../../assets/hamburger.png";
import cross from "../../../assets/cross.png";
import thlogo from "../../../assets/logo.png";
import { useNavigate, Links } from "react-router-dom";
import "./homenavbar.css";

export default function Mobnavbar() {

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='nav-mainhome'>
        <img src={thlogo} onClick={() => navigate('/')} className="th-logohome" />
        <img src={cross} className="cross-imghome" onClick={toggleNav} style={{ display: isOpen ? 'block' : 'none' }} />
        <img src={ham} className="ham-imghome" onClick={toggleNav} style={{ display: isOpen ? 'none' : 'block' }} />

      </div>
      <div id="sideNav" className={isOpen ? 'visiblenav' : 'hiddennav'}>
        <ul className='stateshome'>
          <li onClick={() => navigate('/jaipur')}>Jaipur</li>
          <li onClick={() => navigate('/chandigarh')}>Chandigarh</li>
          <li onClick={() => navigate('/lucknow')}>Lucknow</li>
          <li onClick={() => navigate('/banglore')}>Banglore</li>
        </ul>
      </div>
    </>
  )
}
