import React from 'react'
import chandigarhbg from "../../../assets/chandigarh.webp"
import "./chandigarh.css";
import logoBlack from "../../../assets/logoblack.png";
import chandigarhbgmobile from "../../../assets/chandigarhmobile.webp"
import MobNavbar from "../mobnavbar/mobnavbar.js";
import { useNavigate } from 'react-router-dom';

export default function Chandigarh() {
  const navigate=useNavigate();
  return (
    <>
    <div className='chandi-main'>
      <img src={chandigarhbg}  className='chandi-bg' alt='chandigarh-bg'/>
      <div className="logo-div">
        <img src={logoBlack} onClick={()=>navigate('/')} className='logo' alt="logo-black"/>
      </div>
      <div className="textdiv">
        <h1 className='chandi-title'>Chandigarh</h1>
        <h3 className='venue'>Venue:Lorem, ipsum dolor.</h3>
      </div>
      
    </div>
    <div className="chandi-main-mobile">
      <MobNavbar/>
      <img src={chandigarhbgmobile} className='chandi-bg' alt='chandigarh-bg'/>
      <div className="textdiv">
        <h1 className='chandi-title'>Chandigarh</h1>
        <h3 className='venue'>Venue:Lorem, ipsum dolor.</h3>
      </div>
    </div>
    </>
  )
}
