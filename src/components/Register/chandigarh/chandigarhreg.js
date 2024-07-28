import React from 'react';
import '../pages.css';
import './chandigarhreg.css';
import thomsologo from "../../../assets/logoblack.png";
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../../RegisterForm/registerform';
import cardbg from '../../../assets/cards.bg.webp'

const ChandigarhReg = () => {
    const navigate = useNavigate();
    return (
        <div className='regi-main'>
             <div className='RegC-wrapper'>
        <div className="logo-thomso">
          <img src={thomsologo} onClick={()=>navigate('/')} className="thomso-img" alt="tho-logo" />
        </div>
        <div className="textdiv-chandi">
          <h1 className='chandi-title chandi-reg-title'>Chandigarh</h1>
          <h3 className='venue reg-text reg-text-chandi'>Registration</h3>

          <div className='Reg-box'>
                <RegisterForm
                    cardbg={cardbg}
                    font="black"
                    formborder="#D9D9D9"
                    submit="#8F2735"
                />
          </div>
        </div>
    </div>
        </div>
    );
}

export default ChandigarhReg;
