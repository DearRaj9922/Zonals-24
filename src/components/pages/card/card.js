// import React from 'react';
// import "./card.css";
// import cardbg from "../../../assets/cards.bg.webp";
// import eveimg from "../../../assets/nukkad-natak.webp";

// export default function Card(props) {
//   return (
//     <div className="card-container">
//       <div className="card">
//         <div className="front">
//           <img src={cardbg} alt="card" className="card-bg" />
//           <div className="contents">
//             <div className="event-name">NUKKAD NATAK</div>
//             <div className="event-discr">Lorem, ipsum dolor.</div>
//             <div className="event-img-div">
//               <img src={eveimg} alt="event" className="event-img" />
//             </div>
//             <div className="event-date">8 August 2024</div>
//           </div>
//         </div>
//         <div className="back">
//           <img src={cardbg} alt="card" className="card-bg" />
//           <div className="buttons-div">
//             <button className="btn-1">Register</button>
//             <button className="btn-2">RuleBook</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import "./card.css";
import { useNavigate } from 'react-router-dom';

export default function Card(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [colorhover, setColor] = useState(props.fontColor)
  const navigate =useNavigate();
  

  return (
    <div
      className="card-container"
      onMouseEnter={() => {
        setIsHovered(true)
      }
    }
      onMouseLeave={() => {
        setIsHovered(false)}}
    >
      <div className={`card ${isHovered ? 'hovered' : ''}`}>
        <div className="front">
          <img src={props.background} alt="card" className="card-bg" />
          <div className="contents" style={{color:props.fontColor}}>
            <div className="event-name">{props.name}</div>
            <div className="event-discr">{props.description}</div>
            <div className="event-img-div">
              <img src={props.image} alt="event" className="event-img" />
            </div>
            <div className="event-date">{props.date}</div>
          </div>
        </div>
        <div className="back">
          <img src={props.background} alt="card" className="card-bg" />
          <div className="buttons-div">
            <button style={{border:`3px solid ${colorhover}`,color:{colorhover}}} className="btn-1" onClick={() => navigate(props.registerLink)}>Register</button>
            <button style={{border:`3px solid ${colorhover}`,color:{colorhover} }} className="btn-2" onClick={() => window.open(props.rulebookLink,'_blanck')}>RuleBook</button>
          </div>
        </div>
      </div>
    </div>
  );
}

