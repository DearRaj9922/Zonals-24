import React from 'react'
import jaipurgarhbg from "../../../assets/jaipurbg.webp"
import "./jaipur.css";
import logoBlack from "../../../assets/logoblack.png";
import jaipurbgmobile from "../../../assets/jaipurbgmobile.webp";
import MobNavbar from "../mobnavbar/mobnavbar.js";
import { useNavigate } from 'react-router-dom';

export default function Jaipurgarh() {
  const navigate=useNavigate();
  return (
    <>
    <div className='jaipur-main'>
      <img src={jaipurgarhbg} className='jaipur-bg' alt='jaipurgarh-bg'/>
      <div className="logo-div">
        <img src={logoBlack} onClick={()=>navigate('/')}className='logo' alt="logo-black"/>
      </div>
      <div className="textdiv-jaipur">
        <h1 className='jaipur-title'>Jaipur</h1>
        <h3 className='venue'>Venue:Lorem, ipsum dolor.</h3>
      </div>
      
    </div>
    <div className="jaipur-main-mobile">
      <MobNavbar/>
      <img src={jaipurbgmobile} className='jaipur-bg' alt='jaipurgarh-bg'/>
      <div className="textdiv">
        <h1 className='jaipur-title'>Jaipur</h1>
        <h3 className='venue'>Venue:Lorem, ipsum dolor.</h3>
      </div>
    </div>
    </>
  )
}
