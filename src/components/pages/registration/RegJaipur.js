// import './RegJaipur.css'
// import bg from './../../../assets/jaipurbg.webp'
// import React, { useState, useEffect } from "react";
// import SimpleReactValidator from "simple-react-validator";
// // import colleges from "./college";
// import axios from "axios";
// // import logo1 from "../../Assests/LOGO.svg";
// // import jaipur from "../../Assests/jaipur3.webp"
// import Select from "react-select";
// // import TroublePopup from "../troublePopup/TroublePopup";
// import Creatable from "react-select/creatable";
// import { Link, useParams } from "react-router-dom";
// import { Helmet } from "react-helmet";
// import CircularProgress from "@mui/material/CircularProgress";
// import { Button } from "@mui/material";
// import logo from "./image/Vector.svg";
// import Carousal from "./Carousal";
// // import { JAIPUR } from "./constants";
// import { message } from 'antd';
// const RegJaipur = () => {
//     return (
//         <div>
//           <Helmet>
//             <meta name="description" content=" " />
//             <meta charSet="utf-8" />
//           </Helmet>
//           {/* <Navbar /> */}
//           <div className="full-back2">
//             <div className="Zleft">
//               <a href="/">
//                 <img className="Zlogo" src={logo1} alt="" />
//               </a>
//               <p>JAIPUR ZONALS REGISTRATIONS</p>
//             </div>
//             <div className="Zlogin-form-reg">
    
//               {/* <div className="border-reg"></div> */}
    
//               <div className="Zcarousal">
//                 <Carousal onEventChange={onEventChange}  id={id}/>
//               </div>
//               <form className="login-form-1-reg" onSubmit={(e) => onSubmit(e)}>
//                 <span className="row-reg">
//                   <div className="column">
//                     {/* <label htmlFor="Name" className="fill-it-email">
//                       Name
//                     </label> */}
//                     <input
//                       className="email2"
//                       placeholder="Name *"
//                       required
//                       name="name"
//                       value={user.name}
//                       onChange={(e) => onInputChange(e)}
//                     />
//                   </div>
//                   <div className="column">
//                     {/* <label htmlFor="Email" className="fill-it-email">
//                       Email
//                     </label> */}
//                     <input
//                       placeholder="Email ID *"
//                       className="email2"
//                       name="email"
//                       required
//                       value={user.email}
//                       onChange={(e) => onInputChange(e)}
//                     />
//                     {/* {validator.message("email", props.email, "required|email", {
//                       className: "text-danger",
//                     })} */}
//                   </div>
    
//                 </span>
//                 <span className="row-reg">
//                 <div className="column">
//                     {/* <label htmlFor="Name" className="fill-it-email">
//                       Gender
//                     </label> */}
//                     <Select
//                       className="Zgender_class"
//                       placeholder="Gender *"
//                       //   value={this.state.gender}
//                       onChange={handleChange3}
//                       styles={customStyles}
//                       options={gender_choice}
//                     />
//                   </div>
//                   <div className="column">
//                     {/* <label htmlFor="Name" className="fill-it-email">
//                       Contact Number
//                     </label> */}
//                     <input
//                       placeholder="Phone Number *"
//                       className="email2"
//                       required
//                       name="contact"
//                       value={user.contact}
//                       onChange={(e) => validateMobileNumber(e)}
//                     />{" "}
//                     {mobile_check && (
//                       <div className="text-danger">
//                         Please enter valid Mobile Number
//                       </div>
//                     )}
//                     {/* {validator.message(
//                       "number",
//                       props.number,
//                       "required|min:10|max:10",
//                       {
//                         className: "text-danger",
//                       }
//                     )} */}
//                   </div>
//                 </span>
    
//                 <span className="row-reg">
//                   <div className="column">
//                     {/* <label htmlFor="College" className="fill-it-email">
//                       College
//                     </label> */}
//                     <Creatable
//                      formatCreateLabel={(inputText) => `"${inputText}" Add your college`}
//                       className="college fill-it-email"
//                       //   value={this.state.college}
//                       placeholder="College Name *"
//                       styles={customStyles}
//                       onChange={handleChange2}
//                       options={colleges}
//                     />
//                   </div>
//                 </span>
    
//                 <span className="row-reg">
//                   <div className="column">
//                     {/* <label htmlFor="Branch" className="branch fill-it-email">
//                       Branch and Year
//                     </label> */}
    
//                     {/* <input
//                       placeholder="Degree *"
//                       className="Zpassword2"
//                       required
//                       name="degree"
//                     value={user.degree}
//                       onChange={(e) => onInputChange(e)}
//                     />
//                   </div>
//                   <div className="column"> */}
//                     {/* <label htmlFor="Branch" className="branch fill-it-email">
//                       Branch and Year
//                     </label> */}
    
//                     <input
//                       placeholder="Degree & Year*"
//                       className="Zpassword2"
//                       required
//                       name="branch"
//                     value={user.branch}
//                       onChange={(e) => onInputChange(e)}
//                     />
//                   </div>
//                 </span>
//                 {/* <div className="Zevents">
//                   <div className="column">
//                     <div className="fill-it-email">Zonals Events</div>
//                   </div>
//                   {events &&
//                     events?.zonals_events?.map((event) => (
//                       <div className="ZenentName" key={event.id}>
//                         <input
//                           type="checkbox"
//                           id={event.id}
//                           name={event.id}
//                           value={event.id}
//                           onChange={onEventChange}
//                         />
//                         <label for={event.id}>{event.name}</label>
//                         <br />
//                       </div>
//                     ))}
//                 </div> */}
//                 <div className="Zevents-box">
//                   {isDancing && (
//                     <div className="Zevents">
//                       <div className="column">
//                         <div className="fill-it-email">For TGT Dancing</div>
//                       </div>
//                       <div className="ZenentName">
//                         <input
//                           type="checkbox"
//                           id="solo"
//                           name="solo"
//                           value="solo"
//                           onChange={onChangeDancing}
//                           checked={user.tgt_dancing_category.includes("solo")}
//                         />
//                         <label>Solo</label>
//                         <br />
//                         <input
//                           type="checkbox"
//                           id="team"
//                           name="team"
//                           checked={user.tgt_dancing_category.includes("team")}
//                           value="team"
//                           onChange={onChangeDancing}
//                         />
//                         <label>Team</label>
//                       </div>
//                     </div>
//                   )}
//                   {isSinging && (
//                     <div className="Zevents">
//                       <div className="column">
//                         <div className="fill-it-email">For TGT Singing</div>
//                       </div>
//                       <div className="ZenentName">
//                         <input
//                           type="checkbox"
//                           id="solo"
//                           name="solo"
//                           value="solo"
//                           checked={user.tgt_singing_category.includes("solo")}
//                           onChange={onChangeSinging}
//                         />
//                         <label>Solo</label>
//                         <br />
//                         <input
//                           type="checkbox"
//                           id="team"
//                           name="team"
//                           checked={user.tgt_singing_category.includes("team")}
//                           value="team"
//                           onChange={onChangeSinging}
//                         />
//                         <label>Team</label>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//                 {error && (
//                   <div
//                     className="text-danger"
//                     dangerouslySetInnerHTML={{ __html: errorMsg }}
//                   ></div>
//                 )}
//                 {/* {success && (
//                   <div className="text-success">
//                     🎉You are registerd successfully. */}
//                     {/* Please{" "} */}
//                     {/* <Link to="/login" style={{ color: "#843AE0" }}>
//                       LogIn
//                     </Link> */}
//                   {/* </div>
//                 )} */}
//                 <div className="Zbtn">
//                   <button className="register-btn Zbtn-reg" disabled={!active} style={active == true ? {background: "rgb(68, 37, 27)"} : {background: "#CCC"}}>
//                     {loading ? (
//                       <CircularProgress color="inherit" size={20} />
//                     ) : (
//                       "Register"
//                     )}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//           {/* <TroublePopup close={props.onClose} popup={props.popup} /> */}
//         </div>
//       );
// }

// export default RegJaipur