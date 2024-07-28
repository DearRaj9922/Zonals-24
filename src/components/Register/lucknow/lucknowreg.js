import React from 'react';
import '../pages.css';
import './lucknowreg.css';
import thomsologo from "../../../assets/logoblack.png";
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../../RegisterForm/registerform';
import cardbg from '../../../assets/cardbglucknow.webp'

const LucknowReg = () => {
    const navigate = useNavigate();
    return (
        <div className='regi-main'>
             <div className='RegL-wrapper'>
        <div className="logo-thomso">
          <img src={thomsologo} onClick={()=>navigate('/')} className="thomso-img" alt="tho-logo" />
        </div>
        <div className="textdiv-luck">
          <h1 className='luck-title luck-reg-title'>Lucknow</h1>
          <h3 className='venue reg-text reg-text-luck'>Registration</h3>

          <div className='Reg-box'>
                <RegisterForm
                cardbg={cardbg}
                font="white"
                formborder="#BE0E20"
                submit="#AC037E"
                />
          </div>
        </div>
    </div>
        </div>
    );
}

export default LucknowReg;
