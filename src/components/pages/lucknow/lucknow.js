import React from 'react'
import luckbg from "../../../assets/lucknow.webp"
import "./lucknow.css";
import logoBlack from "../../../assets/logoblack.svg";
import luckbgmobile from "../../../assets/lucknowmobile.webp";
import MobNavbar from "../mobnavbar/mobnavbar.js";
import { useNavigate } from 'react-router-dom';
import Card from "../card/card.js";
import Mobcard from '../card/mobcard.js';
import cardmobbg from "../../../assets/cardbgmoblucknow.webp";
import cardbg from "../../../assets/cardbglucknow.webp";
import image1 from "../../../assets/nukkad-natak.webp";
import image2 from "../../../assets/mrthomso.webp";
import image3 from "../../../assets/tgt-singing.webp";
import image4 from "../../../assets/open-mic.webp";
import image5 from "../../../assets/tgt-dance.webp";
import Footer from "../../../components/Footer/Footer.js";

export default function Lucknow() {
  const navigate=useNavigate();
  const details = [
    {
      number: 1,
      title: "NUKKAD NATAK",
      description: "Blend of Performing Arts, Music and Dance",
      date: "11 August, 2024",
      img: image1,
      href: "https://drive.google.com/file/d/1QgJRaC3IuG897PabnXZWF5ca1wwZmkKS/view?usp=drive_link",
      color: "#fff"
    },
    {
      number: 2,
      title: "MR & MS THOMSO",
      description: "Contest of Individuality and Temperament",
      date: "11 August, 2024",
      img: image2,
      href: "https://drive.google.com/file/d/1evvyInTWOfe0qiakr28wuA_o8-QxqrgU/view?usp=drive_link",
      color: "#fff"
    },
    {
      number: 3,
      title: "TGT SINGING",
      description: "A Showcase of Musical Melodies",
      date: "11 August, 2024",
      img: image3,
      href: "https://drive.google.com/file/d/1ozjH7ryyS7BxYG0YMkVTQPFogCJ1RfDs/view?usp=drive_link",
      color: "#fff"
    },
    {
      number: 4,
      title: "TGT OPEN MIC",
      description: "Exhibition of Raw Talent",
      date: "11 August, 2024",
      img: image4,
      href: "https://drive.google.com/file/d/1jzMdAtOYUAV0qykQ1kyI-f_AptPfretv/view?usp=drive_link",
      color: "#fff"
    },
    {
      number: 5,
      title: "TGT DANCE",
      description: "An Electrifying Dance-off",
      date: "11 August, 2024",
      img: image5,
      href: "https://drive.google.com/file/d/1VQCWrgNBBi7k4g5o3LglpJ1mlW64biBN/view?usp=drive_link",
      color: "#fff"
    },
  ];
  return (
    <>
    <div className='luck-main'>
      <img src={luckbg} className='luck-bg' alt='luck-bg'/>
      <div className="logo-div">
        <img src={logoBlack} onClick={()=>navigate('/')} className='logo' alt="logo-black"/>
      </div>
      <div className="textdiv-luck">
        <h1 className='luck-title'>Lucknow</h1>
        <h3 className='venue-luck'>Venue: BBD University</h3>
        {/* <h3 className='venue-luck'>8 August 2024</h3> */}
      </div>
      <div className="cards-luck">
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
                <div className="card-lucknow">
                  <Card
                    name={el.title}
                    description={el.description}
                    image={el.img}
                    date={el.date}
                    fontColor={el.color}
                    hoverColor={"#fffff"}
                    background={cardbg}
                    // registerLink={`/lucknow/registration/${el.number}`}
                      registerLink={"#"}
                    rulebookLink={el.href} />
                </div>
              </div>
            );
          })}
        </div>
        <Footer/> 
    </div>
    <div className="luck-main-mobile">
      <MobNavbar/>
      <img src={luckbgmobile} className='luck-bg' alt='luck-bg'/>
      <div className="textdiv-luck">
        <h1 className='luck-title'>Lucknow</h1>
        <h3 className='venue-luck'>Venue:BBD University</h3>
        <h3 className='venue-luck'>11 August 2024</h3>
      </div>
      <div className="cards-luck">
          {details.map((el) => {
            var style1 = { marginTop: "0px" };
            return (
              <div
                key={el.number}
                style={style1}
                // className="flip-card"
              >
                <div className="card-lucknow">
                  <Mobcard
                    name={el.title}
                    description={el.description}
                    image={el.img}
                    fontColor={el.color}
                    background={cardmobbg}
                    // registerLink={`/lucknow/registration/${el.number}`}
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

