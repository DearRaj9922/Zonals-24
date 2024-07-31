import React from 'react'
import bangbg from "../../../assets/banglore.webp"
import "./banglore.css";
import logoBlack from "../../../assets/logoblack.svg";
import bangbgmobile from "../../../assets/bangloremobile.webp";
import MobNavbar from "../mobnavbar/mobnavbar.js";
import { useNavigate } from 'react-router-dom';
import Card from "../card/card.js";
import Mobcard from '../card/mobcard.js';
import cardmobbg from "../../../assets/cardbgmobbanglore.webp";
import cardbg from "../../../assets/cardbgbanglore.webp";
import image1 from "../../../assets/nukkad-natak.webp";
import image2 from "../../../assets/mrthomso.webp";
import image3 from "../../../assets/tgt-singing.webp";
import image4 from "../../../assets/open-mic.webp";
import image5 from "../../../assets/tgt-dance.webp";
import Footer from "../../../components/Footer/Footer.js";

export default function Banglore() {
  const navigate=useNavigate();
  const details = [
    {
      number: 1,
      title: "Nukkad NATAK",
      description: "Blend of Performing Arts, Music and Dance",
      date: "9 September, 2023",
      img: image1,
      href: "https://drive.google.com/file/d/1KDW9W94Chr8oKPRdtEofO5MfpznCq7qD/view?usp=drive_link",
      color: "#fff"
    },
    {
      number: 2,
      title: "MR & MS THOMSO",
      description: "Contest of Individuality and Temperament",
      date: "9 September, 2023",
      img: image2,
      href: "https://drive.google.com/file/d/1973FGUsBOy-gLgXp3RItE2IEBTsu31OY/preview",
      color: "#fff"
    },
    {
      number: 3,
      title: "TGT SINGING",
      description: "A Showcase of Musical Melodies",
      date: "9 September, 2023",
      img: image3,
      href: "https://drive.google.com/file/d/1FWBLLGR1tGjVy196k4wm44dj9JCS5Vy7/view?usp=drive_link",
      color: "#fff"
    },
    {
      number: 4,
      title: "TGT OPEN MIC",
      description: "Exhibition of Raw Talent",
      date: "9 September, 2023",
      img: image4,
      href: "https://drive.google.com/file/d/1NQNvWUU85MEKSB1L0c_aL53KkrTZxQ2x/view?usp=drive_link",
      color: "#fff"
    },
    {
      number: 5,
      title: "TGT DANCE",
      description: "An Electrifying Dance-off",
      date: "9 September, 2023",
      img: image5,
      href: "https://drive.google.com/file/d/1FSAD_LcXzyM9jMAwQnneCWhJV3eiUqsn/view?usp=drive_link",
      color: "#fff"
    },
  ];
  return (
    <>
    <div className='bang-main'>
      <img src={bangbg}  className='bang-bg' alt='bang-bg'/>
      <div className="logo-div">
        <img src={logoBlack} onClick={()=>navigate('/')} className='logo' alt="logo-black"/>
      </div>
      <div className="textdiv-bang">
        <h1 className='bang-title'>Bengaluru</h1>
        <h3 className='venue-bang'>Venue:To Be Declared</h3>
        <h3 className='venue-bang'>Date:To Be Declared</h3>
      </div>
      <div className="cards-bang">
          {details.map((el) => {
            var style1 = { marginTop: "0px" };
            if (el.number === 1 || el.number === 5) {
              style1 = {
                marginTop: "12.167vh",
              };
            } else if (el.number === 2 || el.number === 4) {
              style1 = {
                marginTop: "2.083vh",
              };
            } else {
              style1 = { marginTop: "-7vh" };
            }
            return (
              <div
                key={el.number}
                style={style1}
                // className="flip-card"
              >
                <div className="card-banglore">
                  <Card
                    name={el.title}
                    description={el.description}
                    image={el.img}
                    date={el.date}
                    fontColor={el.color}
                    hoverColor={"#fffff"}
                    background={cardbg}
                    // registerLink={`/banglore/registration/${el.number}`}
                    registerLink={"#"}
                    rulebookLink={el.href} />
                </div>
              </div>
            );
          })}
        </div>
      
      <Footer/> 
    </div>
    <div className="bang-main-mobile">
      <MobNavbar/>
      <img src={bangbgmobile} className='bang-bg' alt='bang-bg'/>
      <div className="textdiv-bang">
        <h1 className='bang-title'>Banglore</h1>
        <h3 className='venue-bang'>Venue:To Be Declared</h3>
        <h3 className='venue-bang'>Date:To Be Declared</h3>
      </div>
      <div className="cards-bang">
          {details.map((el) => {
            var style1 = { marginTop: "0px" };
            return (
              <div
                key={el.number}
                style={style1}
                // className="flip-card"
              >
                <div className="card-banglore">
                  <Mobcard
                    name={el.title}
                    description={el.description}
                    image={el.img}
                    fontColor={el.color}
                    background={cardmobbg}
                    registerLink={"#"}
                    rulebookLink={el.href} />
                </div>
              </div>
            );
          })}
        </div> 
      
    </div>
    </>
  )
}
