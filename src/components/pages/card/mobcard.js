import React from 'react'
import './card.css'
import {useNavigate} from "react-router-dom";

export default function Mobcard(props) {
    const navigate = useNavigate()
  return (
    <div>
      <div className="mobcard">
        <img src={props.background} alt="card-mob" className='card-bg-mob'/>
        <div className="contents-mob" style={{color:props.fontColor}}>
            <div className="event-img-div-mob">
              <img src={props.image} alt="event-mob" className="event-img-mob" />
            </div>
            <div className="title-desc">
            <div className="event-name-mob">{props.name}</div>
            <div className="event-discr-mob">{props.description}</div>
            </div>
            {/* <div className="event-date-mob">{props.date}</div> */}
            <div className="buttons-div-mob">
            <button className="btn-1-mob" style={{border:`3px solid ${props.fontColor}`,color:props.fontColor }} onClick={() => navigate(props.registerLink)}>Register</button>
            <button className="btn-2-mob" style={{border:`3px solid ${props.fontColor}`,color:props.fontColor }} onClick={() => navigate(props.rulebookLink)}>RuleBook</button>
          </div>
          </div>
      </div>
    </div>
  )
}
