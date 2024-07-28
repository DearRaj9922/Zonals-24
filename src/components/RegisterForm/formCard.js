import React, {useState} from "react";
import './formCard.css';

const FormCard = (props) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isChecked, setIsChecked] = useState(props.checked);

    const handleCardClick = () => {
        setIsChecked(prevState => !prevState);
    };

    return (
        <div className="reg-card-container"
          onMouseEnter={() => {setIsHovered(true)}}
          onMouseLeave={() => {setIsHovered(false)}}
          onClick={handleCardClick}
        >
          <div className={`reg-card ${isHovered ? '' : ''}` }  style={{filter: `${isChecked?'grayscale(0)':'grayscale(1)'}`}}>
            <div className="reg-front">
              <img src={props.background} alt="card" className="reg-card-bg" />
              <div className="reg-contents" style={{color:props.fontColor}}>
                <div className="reg-header">
                    <input type="checkbox" checked={isChecked} />
                    <div className="reg-event-name">{props.name}</div>
                </div>
                <div className="event-img-div">
                  <img src={props.image} alt="event" className="event-img" />
                </div>
                <div className="event-date">{props.date}</div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default FormCard;

