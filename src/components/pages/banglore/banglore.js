import React from 'react'
import bangbg from "../../../assets/banglore.webp"
import "./banglore.css";
import logoBlack from "../../../assets/logoblack.png";
import bangbgmobile from "../../../assets/bangloremobile.webp";
import MobNavbar from "../mobnavbar/mobnavbar.js";
import { useNavigate } from 'react-router-dom';

export default function Banglore() {
  const navigate=useNavigate();
  return (
    <>
    <div className='bang-main'>
      <img src={bangbg}  className='bang-bg' alt='bang-bg'/>
      <div className="logo-div">
        <img src={logoBlack} onClick={()=>navigate('/')} className='logo' alt="logo-black"/>
      </div>
      <div className="textdiv">
        <h1 className='bang-title'>Banglore</h1>
        <h3 className='venue'>Venue:Lorem, ipsum dolor.</h3>
      </div>
      
    </div>
    <div className="bang-main-mobile">
      <MobNavbar/>
      <img src={bangbgmobile} className='bang-bg' alt='bang-bg'/>
      <div className="textdiv">
        <h1 className='bang-title'>Banglore</h1>
        <h3 className='venue'>Venue:Lorem, ipsum dolor.</h3>
      </div>
    </div>
    </>
  )
}
