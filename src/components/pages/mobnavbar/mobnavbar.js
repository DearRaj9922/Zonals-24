import React, { useEffect, useState } from "react";
import ham from "../../../assets/hamburger.png";
import cross from "../../../assets/cross.png";
import thlogo from "../../../assets/logo.png";
import { useNavigate,Links } from "react-router-dom";
import "./mobnavbar.css";

export default function Mobnavbar() {

    const navigate=useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

  return (
    <>
    <div className='nav-main'>
    <img src={ham} className="ham-img" onClick={toggleNav} style={{ display: isOpen ? 'none' : 'block' }} />
    <img src={cross} className="cross-img" onClick={toggleNav} style={{ display: isOpen ? 'block' : 'none' }} />
    <img src={thlogo} onClick={()=>navigate('/')} className="th-logo" />
      
    </div>
    <div id="sideNav" className={isOpen ? 'visible' : 'hidden'}>
        <ul className='states'>
            <li onClick={()=>window.open('/jaipur')}>Jaipur</li>
            <li onClick={()=>window.open('/chandigarh')}>Chandigarh</li>
            <li onClick={()=>window.open('/lucknow')}>Lucknow</li>
            <li onClick={()=>window.open('/banglore')}>Banglore</li>
        </ul>
    </div>
    </>
  )
}
