import React, { useState } from 'react';
import './footer.css';
import UpArrow from '../Footer/Footer Images/uparrow.svg';
import DownArrow from '../Footer/Footer Images/downarrow.svg';
import Logo from './Footer Images/Logo.svg';
import facebook from './Footer Images/facebook.svg';
import facebookLite from './Footer Images/facebookLite.svg';
import insta from './Footer Images/insta.svg';
import instaLite from './Footer Images/instaLite.svg';
import twitter from './Footer Images/twitter.svg';
import twitterLite from './Footer Images/twitterLite.svg';
import linkedin from './Footer Images/linkedin.svg';
import linkedinLite from './Footer Images/linkedinLite.svg';
import youtube from './Footer Images/youtube.svg';
import youtubeLite from './Footer Images/youtubeLite.svg';

const Footer = (props) => {
  const [clicked, setClicked] = useState(true);
  const [change1, setChange1] = useState(true);
  const [change2, setChange2] = useState(true);
  const [change3, setChange3] = useState(true);
  const [change4, setChange4] = useState(true);
  const [change5, setChange5] = useState(true);

  const handleClick = () => {
    setClicked(!clicked);
  };
  const handleMouseEnter = (setChange) => () => {
    setChange(false);
  };
  const handleMouseLeave = (setChange) => () => {
    setChange(true);
  };

  return (
    <div>
      <div className='footerBox'>
        
        <div className='footerBoxA'>
        
          <div className='footerSub1'>
            <button onMouseEnter={handleMouseEnter(setChange1)} onMouseLeave={handleMouseLeave(setChange1)}>
              <img src={change1 ? facebook : facebookLite} className='footerSub1img1' alt="facebook" />
            </button>
            <button onMouseEnter={handleMouseEnter(setChange2)} onMouseLeave={handleMouseLeave(setChange2)}>
              <img src={change2 ? insta : instaLite} className='footerSub1img2' alt="insta" />
            </button>
            <button onMouseEnter={handleMouseEnter(setChange3)} onMouseLeave={handleMouseLeave(setChange3)}>
              <img src={change3 ? twitter : twitterLite} className='footerSub1img3' alt="twitter" />
            </button>
            <button onMouseEnter={handleMouseEnter(setChange4)} onMouseLeave={handleMouseLeave(setChange4)}>
              <img src={change4 ? linkedin : linkedinLite} className='footerSub1img4' alt="linkedin" />
            </button>
            <button onMouseEnter={handleMouseEnter(setChange5)} onMouseLeave={handleMouseLeave(setChange5)}>
              <img src={change5 ? youtube : youtubeLite} className='footerSub1img5' alt="youtube" />
            </button>
          </div>
          <div className='footerSub2'>
            <button className='footerButton' onClick={handleClick}>
              {clicked ? <img src={UpArrow} alt="upArrow" /> : <img src={DownArrow} alt="DownArrow" />}
            </button>
          </div>
        </div>
        
        <div className={`footerBoxB ${!clicked ? 'open' : 'close'}`}>
        <div className="footerBoxSub5">
              Choose your city
            </div>
          <div className='footerBoxBSub1'>
            {/* <div className="footerBoxSub5">
              Choose your city
            </div> */}
            <div className="navbarWrapper">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" style={{backgroundColor:props.bgcolor}} href="#">Lucknow</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Jaipur</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Chandigarh</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Bangalore</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
