import React from 'react'
import jaipurgarhbg from "../../../assets/jaipurbg.webp"
import "./jaipur.css";
import logoBlack from "../../../assets/logoblack.png";
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


export default function Jaipurgarh() {
  const navigate=useNavigate();
  const details = [
    {
      number: 1,
      title: "Nukkad NATAK",
      discription: "Blend of Performing Arts, Music and Dance",
      date: "9 September, 2023",
      img: image1,
      href:"https://drive.google.com/file/d/1KDW9W94Chr8oKPRdtEofO5MfpznCq7qD/view?usp=drive_link"
    },
    {
      number: 2,
      title: "MR & MS THOMSO",
      discription: "Contest of Individuality and Temperament",
      date: "9 September, 2023",
      img: image2,
      href:"https://drive.google.com/file/d/1973FGUsBOy-gLgXp3RItE2IEBTsu31OY/preview"
    },
    {
      number: 3,
      title: "TGT SINGING",
      discription: "A Showcase of Musical Melodies",
      date: "9 September, 2023",
      img: image3,
      href:"https://drive.google.com/file/d/1FWBLLGR1tGjVy196k4wm44dj9JCS5Vy7/view?usp=drive_link"
    },
    {
      number: 4,
      title: "TGT OPEN MIC",
      discription: "Exhibition of Raw Talent",
      date: "9 September, 2023",
      img: image4,
      href:"https://drive.google.com/file/d/1NQNvWUU85MEKSB1L0c_aL53KkrTZxQ2x/view?usp=drive_link"
    },
    {
      number: 5,
      title: "TGT DANCE",
      discription: "An Electrifying Dance-off",
      date: "9 September, 2023",
      img: image5,
      href:"https://drive.google.com/file/d/1FSAD_LcXzyM9jMAwQnneCWhJV3eiUqsn/view?usp=drive_link"
    },
  ];
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
          const style4 = {
            background: "#44251b",
          };
          return (
            <div
              key={el.number}
              style={style1}
              // className="flip-card"
            >
              <div className="card-jaipur">
                <Card
                name={el.title}
                description={el.discription}
                image={el.img}
                date={el.date}
                background={cardbg}
                registerLink={"#"}
                rulebookLink={`${el.href}`}/>
              </div>
            </div>
          );
        })}
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
