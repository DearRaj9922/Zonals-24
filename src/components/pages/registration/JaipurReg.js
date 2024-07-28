import React, { useState } from 'react'
import './RegJaipur.css'
import bg from '../../../assets/jaipurbgmobile.webp'
import thomsologo from "../../../assets/logo.png";
import { useNavigate, useParams } from 'react-router-dom';
import Carousal from "./Carousal";


const JaipurReg = (props) => {
  // const [isDancing, setIsDancing] = useState(false);
  // const [isSinging, setIsSinging] = useState(false);
  // const [user, setUser] = useState({
  //   name: "",
  //   email: "",
  //   contact: "",
  //   branch: "",
  //   gender: "",
  //   college: "",
  //   zonals_events: [],
  //   zonals_json_events: [],
  //   event: "",
  //   tgt_singing_category: [],
  //   tgt_dancing_category: [],
  // });



  // const onEventChange = (event) => {
  //   if (event.target.name === "TGT Dancing") {
  //     setUser({
  //       ...user,
  //       tgt_dancing_category: "",
  //     });
  //     setIsDancing(!isDancing);
  //   }
  //   if (event.target.name === "TGT Singing") {
  //     setUser({
  //       ...user,
  //       tgt_singing_category: "",
  //     });
  //     setIsSinging(!isSinging);
  //   }
  //   // console.log(event.target.value);
  //   var updatedList = [...user.zonals_events];
  //   if (event.target.checked) {
  //     updatedList = [...user.zonals_events, event.target.value];
  //   } else {
  //     updatedList.splice(user.zonals_events.indexOf(event.target.value), 1);
  //   }
  //   var updatedListNext = [...user.zonals_json_events];
  //   if (event.target.checked) {
  //     updatedListNext = [...user.zonals_json_events, event.target.name];
  //   } else {
  //     updatedListNext.splice(
  //       user.zonals_json_events.indexOf(event.target.name),
  //       1
  //     );
  //   }
  //   setUser({
  //     ...user,
  //     zonals_events: updatedList,
  //     zonals_json_events: updatedListNext,
  //   });
  // };
  const navigate = useNavigate();
  let { id } = useParams();
  return (
    <div className='RegJ-wrapper'>
        <div className="logo-thomso">
          <img src={thomsologo} onClick={()=>navigate('/')} className="thomso-img" alt="tho-logo" />
        </div>
        <div className="textdiv-jaipur">
          <h1 className='jaipur-title jaipur-reg-title'>Jaipur</h1>
          <h3 className='venue reg-text'>Registration</h3>

          <div className='Reg-box'>
          <div className="Zcarousal">
          {/* <Carousal onEventChange={()=>{}} id={id}/> */}
        </div>
          </div>
        </div>
    </div>
  )
}

export default JaipurReg