import React from 'react'
import chandigarhbg from "../../../assets/chandigarh.webp"
import "./chandigarh.css";
import logoBlack from "../../../assets/logoblack.svg";
import chandigarhbgmobile from "../../../assets/chandigarhmobile.webp"
import MobNavbar from "../mobnavbar/mobnavbar.js";
import { useNavigate } from 'react-router-dom';
import Card from "../card/card.js";
import Mobcard from '../card/mobcard.js';
import cardmobbg from "../../../assets/cardmobilebg.webp";
import cardbg from "../../../assets/cards.bg.webp";
import image1 from "../../../assets/nukkad-natak.webp";
import image2 from "../../../assets/mrthomso.webp";
import image3 from "../../../assets/tgt-singing.webp";
import image4 from "../../../assets/open-mic.webp";
import image5 from "../../../assets/tgt-dance.webp";
import Footer from "../../../components/Footer/Footer.js";


export default function Chandigarh() {
  const navigate=useNavigate();
  const details = [
    {
      number: 1,
      title: "NUKKAD NATAK",
      description: "Blend of Performing Arts, Music and Dance",
      date: "To be Declared",
      img: image1,
      href: "https://drive.google.com/file/d/1x5LTSUOhBSmMWt091NncQ5pVN_DZAO_V/view?usp=drive_link",
      color: "#323232"
    },
    {
      number: 2,
      title: "MR & MS THOMSO",
      description: "Contest of Individuality and Temperament",
      date: "To be Declared",
      img: image2,
      href: "https://drive.google.com/file/d/1C9NtXQW8Diu7lQ_oxyV_zK0QUfoTI87S/view?usp=drive_link",
      color: "#323232"
    },
    {
      number: 3,
      title: "TGT SINGING",
      description: "A Showcase of Musical Melodies",
      date: "To be Declared",
      img: image3,
      href: "https://drive.google.com/file/d/1iR2Kyxxz4YNexXUQe11-bVXpDM_keZUG/view?usp=drive_link",
      color: "#323232"
    },
    {
      number: 4,
      title: "TGT OPEN MIC",
      description: "Exhibition of Raw Talent",
      date: "To be Declared",
      img: image4,
      href: "https://drive.google.com/file/d/1kQYmdiyLF5ShWraLngDB74ICyANCVFu3/view?usp=drive_link",
      color: "#323232"
    },
    {
      number: 5,
      title: "TGT DANCE",
      description: "An Electrifying Dance-off",
      date: "To be Declared",
      img: image5,
      href: "https://drive.google.com/file/d/1pYgSHZrJVl4Pm3bug2fQm_Jn4-eH5DND/view?usp=drive_link",
      color: "#323232"
    },
  ];
  return (
    <>
    <div className='chandi-main'>
      <img src={chandigarhbg}  className='chandi-bg' alt='chandigarh-bg'/>
      <div className="logo-div">
        <img src={logoBlack} onClick={()=>navigate('/')} className='logo' alt="logo-black"/>
      </div>
      <div className="textdiv-chandi">
        <h1 className='chandi-title'>Chandigarh</h1>
        <h3 className='venue-chandi'>venue:To Be Declared</h3>
        {/* <h3 className='venue-chandi'>Date:To Be  Declared</h3> */}
      </div>
      <div className="cards-chandi">
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
                <div className="card-chandigarh">
                  <Card
                    name={el.title}
                    description={el.description}
                    image={el.img}
                    date={el.date}
                    fontColor={el.color}
                    hoverColor={"#fffff"}
                    background={cardbg}
                    // registerLink={`/chandigarh/registration/${el.number}`}
                    registerLink={"#"}
                    rulebookLink={el.href} />
                </div>
              </div>
            );
          })}
        </div>
        <Footer/>  
    </div>
    <div className="chandi-main-mobile">
      <MobNavbar/>
      <img src={chandigarhbgmobile} className='chandi-bg' alt='chandigarh-bg'/>
      <div className="textdiv-chandi">
        <h1 className='chandi-title'>Chandigarh</h1>
        <h3 className='venue-chandi'>venue:To Be Declared</h3>
        <h3 className='venue-chandi'>Date:To Be  Declared</h3>
      </div>
      <div className="cards-chandi">
          {details.map((el) => {
            var style1 = { marginTop: "0px" };
            return (
              <div
                key={el.number}
                style={style1}
                // className="flip-card"
              >
                <div className="card-chandigarh">
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
