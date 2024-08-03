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
    <img src={thlogo} onClick={()=>navigate('/')} className="th-logo" />
    <img src={cross} className="cross-img" onClick={toggleNav} style={{ display: isOpen ? 'block' : 'none' }} />
    <img src={ham} className="ham-img" onClick={toggleNav} style={{ display: isOpen ? 'none' : 'block' }} />
      
    </div>
    <div id="sideNav" className={isOpen ? 'hidden' : 'visible'}>
        <ul className='states'>
            <li onClick={()=>navigate('/jaipur')}>Jaipur</li>
            <li onClick={()=>navigate('/chandigarh')}>Chandigarh</li>
            <li onClick={()=>navigate('/lucknow')}>Lucknow</li>
            <li onClick={()=>navigate('/banglore')}>Bengaluru</li>
        </ul>
    </div>
    </>
  )
}
