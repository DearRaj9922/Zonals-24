import React, { useState } from 'react';
import './footer.css';
import UpArrow from '../Footer/Footer Images/uparrow.svg';
import DownArrow from '../Footer/Footer Images/downarrow.svg';
// import Logo from './Footer Images/Logo.svg';
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
import { Link ,useLocation} from 'react-router-dom';


const Footer = () => {

const location=useLocation();

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
  const style2={
    backgroundColor:"#D6D6D6",
    color:"#AB4C00",
    borderRadius:"5px"
  };
  const style3={};

  return (
    <div>
      <div className='footerBoxnew'>
        
        <div className='footerBoxAnew'>
        
          <div className='footerSub1new'>
            <button onMouseEnter={handleMouseEnter(setChange1)} onMouseLeave={handleMouseLeave(setChange1)}>
              <img src={change1 ? facebook : facebookLite} className='footerSub1img1new' alt="facebook" />
            </button>
            <button onMouseEnter={handleMouseEnter(setChange2)} onMouseLeave={handleMouseLeave(setChange2)}>
              <img src={change2 ? insta : instaLite} className='footerSub1img2new' alt="insta" />
            </button>
            <button onMouseEnter={handleMouseEnter(setChange3)} onMouseLeave={handleMouseLeave(setChange3)}>
              <img src={change3 ? twitter : twitterLite} className='footerSub1img3new' alt="twitter" />
            </button>
            <button onMouseEnter={handleMouseEnter(setChange4)} onMouseLeave={handleMouseLeave(setChange4)}>
              <img src={change4 ? linkedin : linkedinLite} className='footerSub1img4new' alt="linkedin" />
            </button>
            <button onMouseEnter={handleMouseEnter(setChange5)} onMouseLeave={handleMouseLeave(setChange5)}>
              <img src={change5 ? youtube : youtubeLite} className='footerSub1img5new' alt="youtube" />
            </button>
          </div>
          <div className='footerSub2new'>
            <button className='footerButtonnew' onClick={handleClick}>
              {clicked ? <img src={UpArrow} alt="upArrow" /> : <img src={DownArrow} alt="DownArrow" />}
            </button>
          </div>
        </div>
        
        <div className={`footerBoxBnew ${!clicked ? 'open' : 'close'}`}>
        <div className="footerBoxSub5new">
              Choose your city
            </div>
          <div className='footerBoxBSub1new'>
            {/* <div className="footerBoxSub5">
              Choose your city
            </div> */}
            <div className="navbarWrappernew">
              <ul className="navbar-navnew">
                <li className="nav-itemnew">

                  <Link className="nav-linknew" style={location.pathname==="/lucknow"?style2:style3} to="/lucknow">Lucknow</Link>
                  
                  
            
                </li>
                <li className="nav-itemnew">
                  {/* <a className="nav-link" href="#">Jaipur</a> */}
                  <Link className="nav-linknew" style={location.pathname==="/jaipur"?style2:style3} to="/jaipur">Jaipur</Link>
                  
                </li>
                <li className="nav-itemnew">
                  {/* <a className="nav-link" href="#">Chandigarh</a> */}
                  <Link className="nav-linknew" style={location.pathname==="/chandigarh"?style2:style3} to="/chandigarh">Chandigarh</Link>
                </li>
                <li className="nav-itemnew">
                  {/* <a className="nav-link" href="#">Bangalore</a> */}
                  <Link className="nav-linknew" style={location.pathname==="/banglore"?style2:style3} to="/banglore">Bengaluru</Link>
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
