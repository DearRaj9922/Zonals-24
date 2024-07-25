import React from 'react';
import './registerform.css';

const RegisterForm = () => {
    return (
        <div className='reg-wrapper'>
            <div className="reg-events">
                <div className="reg-event">E1</div>
                <div className="reg-event">E2</div>
                <div className="reg-event">E3</div>
                <div className="reg-event">E4</div>
                <div className="reg-event">E5</div>
            </div>
            <div className="reg-form">
                <input type="text" className="form-input input1" placeholder='Name*' />
                <input type="text" className="form-input input2" placeholder='E-Mail ID*' />
                <select className="form-input input3">
                    <option value="" disabled selected hidden>Gender*</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <select className="form-input input4">
                    <option value="" disabled selected hidden>District*</option>
                    <option value="district1">District 1</option>
                    <option value="district2">District 2</option>
                    <option value="district3">District 3</option>
                </select>
                <select className="form-input input5">
                    <option value="" disabled selected hidden>College Name*</option>
                    <option value="college1">College 1</option>
                    <option value="college2">College 2</option>
                    <option value="college3">College 3</option>
                </select>
                <input type="text" className="form-input input6" placeholder='Branch*' />
                <input type="text" className="form-input input7" placeholder='Year*' />
            </div>
        </div>
    );
}

export default RegisterForm;
