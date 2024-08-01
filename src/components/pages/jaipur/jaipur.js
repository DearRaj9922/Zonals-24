import React from 'react'
import jaipurgarhbg from "../../../assets/jaipurbg.webp"
import "./jaipur.css";
import logoBlack from "../../../assets/logoblack.svg";
import jaipurbgmobile from "../../../assets/jaipurbgmobile.webp";
import MobNavbar from "../mobnavbar/mobnavbar.js";
import { useNavigate } from 'react-router-dom';
import cardbg from "../../../assets/cards.bg.webp";
import image1 from "../../../assets/nukkad-natak.webp";
import image2 from "../../../assets/mrthomso.webp";
import image3 from "../../../assets/tgt-singing.webp";
import image4 from "../../../assets/open-mic.webp";
import image5 from "../../../assets/tgt-dance.webp";
import Card from "../card/card.js";
import Mobcard from '../card/mobcard.js';
import cardmobbg from "../../../assets/cardmobilebg.webp";
import Footer from "../../../components/Footer/Footer.js";

export default function Jaipurgarh() {
  const navigate = useNavigate();
  const details = [
    {
      number: 1,
      title: "NUKKAD NATAK",
      description: "Blend of Performing Arts, Music and Dance",
      date: "To be Declared",
      img: image1,
      href: "https://drive.google.com/file/d/1lDQC2OtZYBO_1MEygyaznNiG74GfvgfW/view?usp=drive_link",
      color: "#323232"
    },
    {
      number: 2,
      title: "MR & MS THOMSO",
      description: "Contest of Individuality and Temperament",
      date: "To be Declared",
      img: image2,
      href: "https://drive.google.com/file/d/1K1o5jJINbenawi3stXgDfkZvE7K9JVHR/view?usp=drive_link",
      color: "#323232"
    },
    {
      number: 3,
      title: "TGT SINGING",
      description: "A Showcase of Musical Melodies",
      date: "To be Declared",
      img: image3,
      href: "https://drive.google.com/file/d/1B3iIDHUGlh7w0LeXQ0QqyFE-xUI2uu2o/view?usp=drive_link",
      color: "#323232"
    },
    {
      number: 4,
      title: "TGT OPEN MIC",
      description: "Exhibition of Raw Talent",
      date: "To be Declared",
      img: image4,
      href: "https://drive.google.com/file/d/1zUStJSYPb7Wcy6h32sMeayeB4-6l1bPT/view?usp=drive_link",
      color: "#323232"
    },
    {
      number: 5,
      title: "TGT DANCE",
      description: "An Electrifying Dance-off",
      date: "To be Declared",
      img: image5,
      href: "https://drive.google.com/file/d/1HIZ3j4aUQX9dMzbSy1PGnb5SrLC3sAjK/view?usp=drive_link",
      color: "#323232"
    },
  ];

  return (
    <>
      <div className='jaipur-main'>
        <img src={jaipurgarhbg} className='jaipur-bg' alt='jaipur-bg' />
        <div className="logo-div">
          <img src={logoBlack} onClick={() => navigate('/')} className='logo' alt="logo-black" />
        </div>
        <div className="textdiv-jaipur">
          <h1 className='jaipur-title'>Jaipur</h1>
          <h3 className='venue'>Venue:To Be Declared</h3>
          {/* <h3 className='venue'>Date:To Be Declared</h3> */}
        </div>
        <div className="cards">
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
                <div className="card-jaipur">
                  <Card
                    name={el.title}
                    description={el.description}
                    image={el.img}
                    date={el.date}
                    fontColor={el.color}
                    hoverColor={"#fffff"}
                    background={cardbg}
                    // registerLink={`/jaipur/registration/${el.number}`}
                    registerLink={"#"}
                    rulebookLink={el.href} />
                </div>
              </div>
            );
          })}
        </div>
        <Footer/> 
      </div>
      <div className="jaipur-main-mobile">
        <MobNavbar />
        <img src={jaipurbgmobile} className='jaipur-bg' alt='jaipurgarh-bg' />
        <div className="textdiv">
          <h1 className='jaipur-title'>Jaipur</h1>
          <h3 className='venue'>Venue:To Be Declared</h3>
          <h3 className='venue'>Date:To Be Declared</h3>
        </div>
        <div className="cards">
          {details.map((el) => {
            var style1 = { marginTop: "0px" };
            return (
              <div
                key={el.number}
                style={style1}
                // className="flip-card"
              >
                <div className="card-jaipur">
                  <Mobcard
                    name={el.title}
                    description={el.description}
                    image={el.img}
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
