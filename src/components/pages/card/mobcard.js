import React from 'react'
import './card.css'

export default function mobcard(props) {
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
            <button className="btn-1-mob" style={{border:`3px solid ${props.fontColor}`,color:props.fontColor }} onClick={() => window.open(props.registerLink, '_blank')}>Register</button>
            <button className="btn-2-mob" style={{border:`3px solid ${props.fontColor}`,color:props.fontColor }} onClick={() => window.open(props.rulebookLink, '_blank')}>RuleBook</button>
          </div>
          </div>
      </div>
    </div>
  )
}
