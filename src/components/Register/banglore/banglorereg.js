import React from 'react';
import '../pages.css';
import './banglorereg.css';
import thomsologo from "../../../assets/logoblack.svg";
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../../RegisterForm/registerform';
import cardbg from '../../../assets/cardbgbanglore.webp'
const BangaloreReg = () => {
    const navigate = useNavigate();
    return (
        <div className='regi-main'>
             <div className='RegB-wrapper'>
        <div className="logo-thomso">
          <img src={thomsologo} onClick={()=>navigate('/')} className="thomso-img" alt="tho-logo" />
        </div>
        <div className="textdiv-bang">
          <h1 className='bang-title bang-reg-title'>Bengaluru</h1>
          <h3 className='venue reg-text reg-text-bang'>Registration</h3>

          <div className='Reg-box'>
                <RegisterForm
                  cardbg={cardbg}
                  font="white"
                  formborder="#BE0E20"
                  submit="#8F2735"
                />
          </div>
        </div>
    </div>
        </div>
    );
}

export default BangaloreReg;
