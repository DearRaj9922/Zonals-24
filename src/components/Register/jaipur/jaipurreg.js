import React, { useEffect } from 'react';
import '../pages.css';
import './jaipurreg.css';
import thomsologo from "../../../assets/logoblack.svg";
import { useNavigate, useParams } from 'react-router-dom';
import RegisterForm from '../../RegisterForm/registerform';
import cardbg from '../../../assets/cards.bg.webp'

const JaipurReg = () => {
    const navigate = useNavigate();
    const{id}=useParams();

    // useEffect(() =>{console.log(id)});
    return (
        <div className='regi-main'>
             <div className='RegJ-wrapper'>
        <div className="logo-thomso">
          <img src={thomsologo} onClick={()=>navigate('/')} className="thomso-img" alt="tho-logo" />
        </div>
        <div className="textdiv-jaipur">
          <h1 className='jaipur-title jaipur-reg-title'>Jaipur</h1>
          <h3 className='venue reg-text'>Registration</h3>

          <div className='Reg-box'>
                <RegisterForm
                  cardbg={cardbg}
                  font="black"
                  formborder="#D9D9D9"
                  submit="#8F2735"
                  id={id}
                />
          </div>
        </div>
    </div>
        </div>
    );
}

export default JaipurReg;
