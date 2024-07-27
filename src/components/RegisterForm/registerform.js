import React from 'react';
import './registerform.css';
import FormCard from './formCard';
import cardbg from "../../assets/cardbgbanglore.webp";
import image1 from "../../assets/nukkad-natak.webp";
import image2 from "../../assets/mrthomso.webp";
import image3 from "../../assets/tgt-singing.webp";
import image4 from "../../assets/open-mic.webp";
import image5 from "../../assets/tgt-dance.webp";

const cards = [
    {
      number: 1,
      title: "Nukkad NATAK",
      date: "9 September, 2023",
      img: image1,
      href: "https://drive.google.com/file/d/1KDW9W94Chr8oKPRdtEofO5MfpznCq7qD/view?usp=drive_link",
      color: "#fff"
    },
    {
      number: 2,
      title: "MR & MS THOMSO",
      date: "9 September, 2023",
      img: image2,
      href: "https://drive.google.com/file/d/1973FGUsBOy-gLgXp3RItE2IEBTsu31OY/preview",
      color: "#fff"
    },
    {
      number: 3,
      title: "TGT SINGING",
      date: "9 September, 2023",
      img: image3,
      href: "https://drive.google.com/file/d/1FWBLLGR1tGjVy196k4wm44dj9JCS5Vy7/view?usp=drive_link",
      color: "#fff"
    },
    {
      number: 4,
      title: "TGT OPEN MIC",
      date: "9 September, 2023",
      img: image4,
      href: "https://drive.google.com/file/d/1NQNvWUU85MEKSB1L0c_aL53KkrTZxQ2x/view?usp=drive_link",
      color: "#fff"
    },
    {
      number: 5,
      title: "TGT DANCE",
      date: "9 September, 2023",
      img: image5,
      href: "https://drive.google.com/file/d/1FSAD_LcXzyM9jMAwQnneCWhJV3eiUqsn/view?usp=drive_link",
      color: "#fff"
    },
]

const RegisterForm = () => {
    return (
        <form className='reg-wrapper'>
            <div className="reg-events">
              {cards.map((el) => {
                var style1 = { marginTop: "0px" };
                return (
                  <div
                    key={el.number}
                    style={style1}
                    // className="flip-card"
                  >
                    <div className="card-banglore">
                      <FormCard
                        name={el.title}
                        image={el.img}
                        fontColor={el.color}
                        background={cardbg}
                        registerLink={"#"}
                        rulebookLink={el.href} />
                    </div>
                  </div>
                );
              })}
            </div> 
            <div className="reg-form">
                <input type="text" className="form-input input1" placeholder='Name*' />
                <input type="text" className="form-input input2" placeholder='E-Mail ID*' />
                <select className="form-input input3">
                    <option value="" disabled selected hidden>Gender*</option>
                    <option value="male">Divya Raj</option>
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
            <button className='reg-submit-button' type='submit'>Submit</button>
        </form>
    );
}

export default RegisterForm;
