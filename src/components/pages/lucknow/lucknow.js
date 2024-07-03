import React from 'react'
import luckbg from "../../../assets/lucknow.webp"
import "./lucknow.css";
import logoBlack from "../../../assets/logoblack.png";
import luckbgmobile from "../../../assets/lucknowmobile.webp";
import MobNavbar from "../mobnavbar/mobnavbar.js";
import { useNavigate } from 'react-router-dom';

export default function Lucknow() {
  const navigate=useNavigate();
  return (
    <>
    <div className='luck-main'>
      <img src={luckbg} className='luck-bg' alt='luck-bg'/>
      <div className="logo-div">
        <img src={logoBlack} onClick={()=>navigate('/')} className='logo' alt="logo-black"/>
      </div>
      <div className="textdiv">
        <h1 className='luck-title'>Lucknow</h1>
        <h3 className='venue'>Venue:Lorem, ipsum dolor.</h3>
      </div>
      
    </div>
    <div className="luck-main-mobile">
      <MobNavbar/>
      <img src={luckbgmobile} className='luck-bg' alt='luck-bg'/>
      <div className="textdiv">
        <h1 className='luck-title'>Lucknow</h1>
        <h3 className='venue'>Venue:Lorem, ipsum dolor.</h3>
      </div>
    </div>
    </>
  )
}

