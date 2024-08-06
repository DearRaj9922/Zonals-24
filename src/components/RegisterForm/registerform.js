import React, {useEffect, useState} from 'react';
import './registerform.css';
import FormCard from './formCard';
import cardbg from "../../assets/cardbgbanglore.webp";
import image1 from "../../assets/nukkad-natak.webp";
import image2 from "../../assets/mrthomso.webp";
import image3 from "../../assets/tgt-singing.webp";
import image4 from "../../assets/open-mic.webp";
import image5 from "../../assets/tgt-dance.webp";
import {useParams} from 'react-router-dom';
import {JAIPUR, LUCKNOW} from "../Register/constants";
import CircularProgress from "@mui/material/CircularProgress";
import axios from 'axios'
import Creatable from "react-select/creatable";
import SimpleReactValidator from "simple-react-validator";

import {message} from 'antd';
import college from "../Register/college";

const cards = [
    {
        number: 1,
        title: "NUKKAD NATAK",
        date: "9 September, 2023",
        img: image1,
        href: "https://drive.google.com/file/d/1KDW9W94Chr8oKPRdtEofO5MfpznCq7qD/view?usp=drive_link",
        color: "#fff",
        isChecked: false,
    },
    {
        number: 2,
        title: "MR & MS THOMSO",
        date: "9 September, 2023",
        img: image2,
        href: "https://drive.google.com/file/d/1973FGUsBOy-gLgXp3RItE2IEBTsu31OY/preview",
        color: "#fff",
        isChecked: false,
    },
    {
        number: 3,
        title: "TGT SINGING",
        date: "9 September, 2023",
        img: image3,
        href: "https://drive.google.com/file/d/1FWBLLGR1tGjVy196k4wm44dj9JCS5Vy7/view?usp=drive_link",
        color: "#fff",
        isChecked: false,
    },
    {
        number: 4,
        title: "TGT OPEN MIC",
        date: "9 September, 2023",
        img: image4,
        href: "https://drive.google.com/file/d/1NQNvWUU85MEKSB1L0c_aL53KkrTZxQ2x/view?usp=drive_link",
        color: "#fff",
        isChecked: false,
    },
    {
        number: 5,
        title: "TGT DANCE",
        date: "9 September, 2023",
        img: image5,
        href: "https://drive.google.com/file/d/1FSAD_LcXzyM9jMAwQnneCWhJV3eiUqsn/view?usp=drive_link",
        color: "#fff",
        isChecked: false,
    },
]

const RegisterForm = (props) => {
    const [active, setActive] = useState(false);
    const zonal = window.location.href.split('/')[window.location.href.split('/').length-3]
    const [mobile_check, setMobile_check] = useState(false);
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    // const [success, setSuccess] = useState(false);
    const [confrim_err, setConfrim_err] = useState(false);
    const [errorMsg, setErrorMsg] = useState();
    const [noContent, SetNoContent] = useState(false);
    const [isDancing, setIsDancing] = useState(false);
    const [isSinging, setIsSinging] = useState(false);
    const [danceSolo,setDanceSolo] = useState(false);
    const [danceTeam, setDanceTeam] = useState(false);
    const [singingSolo, setSingingSolo] = useState(false);
    const [singingTeam, setSingingTeam] = useState(false);
    const params = useParams();
    const [user, setUser] = useState({
        name: "",
        email: "",
        contact: "",
        district: "",
        year: "",
        degree: "",
        branch: "",
        college: "",
        zonals_events: [1],
        zonals_json_events: [],
        event: "",
        tgt_singing_category: [],
        tgt_dancing_category: [],
    });
    const {id} = useParams();
    const [nameArray,setNameArray] = useState([cards.filter((card) => card.number == id)[0].title]);
    const defaultSelectedCard = cards.filter((card) => card.number == id)[0];
    const [selectedCards, setSelectedCards] = useState([defaultSelectedCard]);

    const handleChange3 = (e) => {
        setUser({...user, gender: e.target.value});
    };
    const handleChange2 = (college) => {
        setUser({...user, college: college?.value});
    };

    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }
    // const validateMobileNumber = (e) => {
    //     if (e.target.value.length <= 10) {
    //       setMobile_check(true);
    //       setUser({ ...user, [e.target.name]: e.target.value });
    //       let mnumber = e.target.value;
    //       if (mnumber.length == 10) {
    //         setMobile_check(false);
    //       }
    //     }
    //   };

const validateMobileNumber = (e) => {
    const mnumber = e.target.value;
    if (mnumber.length <= 10 && /^[0-9]*$/.test(mnumber)) {
      setUser({ ...user, contact: mnumber });
      setMobile_check(mnumber.length !== 10);
    }
  };
    const singingChange = ()=>{

    }
    const customStyles = {
        option: (base) => ({
            ...base,
            // borderBottom: "1px solid black",
            backgroundColor: "white",
            "&:hover": {
                background: "grey",
                color: "black",
            },
            // fontFamily: "Comic Sans MS",
            // fontWeight: 400,
            // fontSize: 13,
            color: "black",
            // padding: 4,
        }),
        // control: () => ({
        //   width: "100%",
        //   display: "flex",
        //   // borderBottom: "0.5px solid rgba(255, 255, 255, 0.54)",
        // }),
        // input: (base) => ({
        //   ...base,
        //   marginTop: "-20px",
        //   paddingTop: "-20px",
        //   color: "#666666",
        //   // fontSize: "14px",
        //   overflow: "hidden",
        // }),
        // // 21q
        // menuList: (base) => ({
        //   ...base,
        //   height: "12vh",
        //   background: "#FEF0E7",
        //   border: "1px solid #E35F5F",
        //   boxShadow: "46px 6px 64px 0px rgba(0, 0, 0, 0.25)",
        // }),
        // dropdownIndicator: (base, state) => ({
        //   ...base,
        //   marginTop: "-20px",
        //   fontWeight: "600",
        //   color: "#666666",
        //   "&:hover": {
        //     color: "rgb(255, 255, 255)",
        //   },
        //   transform: state.selectProps.menuIsOpen && "rotate(180deg)",
        // }),
        // indicatorSeparator: (base) => ({
        //   ...base,
        //   display: "none",
        // }),
        // menu: (base) => ({
        //   ...base,
        //   background: "white",
        //   height: "12vh",
        //   marginTop: "-1px",
        //   marginLeft: "-10px",
        // }),
        //
        // // clearIndicator: () => ({
        // //   fontWeight: "600",
        // //   color: "white",
        // //   // width:'27vw'
        // // }),
        // placeholder: (base) => ({
        //   ...base,
        //   background: "white",
        //   fontSize: "1rem",
        //   // fontFamily: "Comic Sans MS",
        //   color: "#505050",
        //   fontWeight: "400",
        //   lineHeight: "25px"
        // }),
        // valueContainer: () => ({
        //   color: "white",
        //   fontWeight: "600",
        //   // opacity: "0.8",
        //   width: "calc(100% - 40px)",
        // }),
        // singleValue: (base, state) => {
        //   const opacity = state.isDisabled ? 0.5 : 1;
        //   return {
        //     ...base,
        //     opacity,
        //     // margin: 4,
        //     background: "white",
        //     transition: "opacity 300ms",
        //     color: "#666666",
        //     fontWeight: "400",
        //     fontSize: "1rem",
        //   };
        // },
    };
    const onChangingCard =(id)=>{
        if(selectedCards.find(card=>card.number == id)){
            const newList = selectedCards.filter((card)=>card.number != id)
            setSelectedCards(newList);
            const newNameList = nameArray.filter((name)=>name!=selectedCards.find(card=>card.number == id).title)
            setNameArray(newNameList);
            if(id==3) setIsSinging(false)
            if(id==5) setIsDancing(false)
        }
        else{
            setSelectedCards(prev=>{
                return [...prev, cards.find(card=>card.number == id)];
            })
            setNameArray(prev=>{
                return [...prev, cards.find(card=>card.number == id).title];
            })
            if(id==3) setIsSinging(true)
            if(id==5) setIsDancing(true)
        }
        // console.log(nameArray);
        // console.log(id)
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        setUser({...user, event: LUCKNOW});
        const valuess = new FormData();
        valuess.append("name", user.name);
        valuess.append("email", user.email);
        valuess.append("contact", user.contact);
        valuess.append("branch", user.branch);
        valuess.append("college", user.college);
        valuess.append("event", 1);
        valuess.append("gender", user.gender);
        valuess.append(
            "tgt_dancing_category",
            user.tgt_dancing_category.toString()
        );
        valuess.append(
            "tgt_singing_category",
            user.tgt_singing_category.toString()
        );
        // valuess.append(
        //     "tgt_dancing_category",
        //     (selectedCards.find(card=>card.number==5)?"team":"")
        // );
        // valuess.append(
        //     "tgt_singing_category",
        //     (selectedCards.find(card=>card.number==3)?"team":"")
        //
        // );
        valuess.append(
            "zonals_json_events",
            JSON.stringify(nameArray)
        );
        // for (let i = 0; i < user.zonals_events.length; i++) {
            valuess.append("zonals_events", (zonal==='jaipur'?(2):(zonal==='lucknow'?(3):(zonal==='banglore'?(4):(zonal==='chandigarh'?(5):(-1))))));
        // }
        // console.log(user);
        if (user.zonals_events.length === 0) {
            setError(true);
            setErrorMsg("Please select atleast one event");
        } else {
            setLoading(true);
            await axios
                .post("https://api2.thomso.in/apiV1/zonalsregister", valuess)
                .then((res) => {
                    if (res.status === 201) {
                        //   console.log(res.data);
                        setError(false);
                        message.success("🎉You are registered successfully.")

                        setLoading(false)
                        setActive(false)
                    }
                    setLoading(false);
                    // setTimeout(() => {
                    //     window.location.reload(false);
                    // }, 1000);
                })
                .catch((err) => {
                    // console.log("register Error:", err.response.data);
                    var data = "";
                    for (var key in err?.response?.data) {
                        data += err?.response?.data[key] + "<br>";
                    }
                    setError(true);
                    setErrorMsg(data);
                    // this.setState({ errorMsg: data, error: true, success: false });
                    setLoading(false);
                });
        }
    };
    // navigate("/")
    const validator = new SimpleReactValidator();

    const onEventChange = (event) => {
        if (event.target.name === "TGT Dancing") {
            setUser({
                ...user,
                tgt_dancing_category: "",
            });
            setIsDancing(!isDancing);
        }
        if (event.target.name === "TGT Singing") {
            setUser({
                ...user,
                tgt_singing_category: "",
            });
            setIsSinging(!isSinging);
        }
        // console.log(event.target.value);
        var updatedList = [...user.zonals_events];
        if (event.target.checked) {
            updatedList = [...user.zonals_events, event.target.value];
        } else {
            updatedList.splice(user.zonals_events.indexOf(event.target.value), 1);
        }
        var updatedListNext = [...user.zonals_json_events];
        if (event.target.checked) {
            updatedListNext = [...user.zonals_json_events, event.target.name];
        } else {
            updatedListNext.splice(
                user.zonals_json_events.indexOf(event.target.name),
                1
            );
        }
        setUser({
            ...user,
            zonals_events: updatedList,
            zonals_json_events: updatedListNext,
        });
    };

    const onChangeDancing = (e) => {
        var updatedListNext = [...user.tgt_dancing_category];
        if (e.target.checked) {
            updatedListNext = [...user.tgt_dancing_category, e.target.value];
        } else {
            updatedListNext.splice(
                user.tgt_dancing_category.indexOf(e.target.value),
                1
            );
        }
        setUser({
            ...user,
            tgt_dancing_category: updatedListNext,
        });

        // if (e.target.value === user.tgt_dancing_category) {
        //   setUser({
        //     ...user,
        //     tgt_dancing_category: "",
        //   });
        // } else {
        //   setUser({ ...user, tgt_dancing_category: e.target.value });
        // }
    };

    const onChangeSinging = (e) => {
        var updatedListNext = [...user.tgt_singing_category];
        if (e.target.checked) {
            updatedListNext = [...user.tgt_singing_category, e.target.value];
        } else {
            updatedListNext.splice(
                user.tgt_singing_category.indexOf(e.target.value),
                1
            );
        }
        setUser({
            ...user,
            tgt_singing_category: updatedListNext,
        });
        // if (e.target.value === user.tgt_singing_category) {
        //   setUser({
        //     ...user,
        //     tgt_singing_category: "",
        //   });
        // } else {
        //   setUser({ ...user, tgt_singing_category: e.target.value });
        // }
    };


    useEffect(() => {
        if (user.name && user.email && user.gender && user.college && user.branch && user.contact && user.year &&  !mobile_check) {
            setActive(true)
        }
        console.log(zonal)
    }, [user])


    // const[isChecked,setIsChecked] = useState(false);
    // let isChecked = false

    const [cardList, setCardList] = useState([]);
    // const id=props.id;



    useEffect(() => {
        const updatedCards = cards.map((card, index) => ({
            ...card,
            isChecked: (index + 1) === parseInt(id, 10)
        }));
        setCardList(updatedCards);

        // console.log(id);
    }, [id]);


    return (
<>

        <form onSubmit={onSubmit} className='reg-wrapper' style={{borderColor:`${props.formborder}`}}>
          <div className="reg-event-wrap">
            <div className="reg-events">

                {cardList.map((el) => {
                    var style1 = {marginTop: "0px"};
                    // el.number===props.id?(setIsChecked(true)):(console.log(props.id))
                    return (
                        <div
                            key={el.number}
                            style={style1}
                            // className="flip-card"
                        >
                            <div className="card-banglore">
                                <FormCard
                                    number={el.number}
                                    name={el.title}
                                    image={el.img}
                                    fontColor={props.font}
                                    background={props.cardbg}
                                    registerLink={"#"}
                                    rulebookLink={el.href}
                                    checked={el.isChecked}
                                    onChange={onChangingCard}
                                />

                            </div>
                        </div>
                    );
                })}
                </div>

            </div>
            <div className="reg-form">
                <input type="text" name="name" value={user.name} onChange={(e) => onInputChange(e)}
                       className="form-input input1" placeholder='Name*'/>
                <input type="email" name="email" value={user.email} onChange={(e) => onInputChange(e)}
                       className="form-input input2" placeholder='E-Mail ID*'/>
                <select value={user.gender} onChange={(e)=>handleChange3(e)} className="form-input input3">
                    <option value="" disabled selected hidden>Gender*</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <input type="text" name="branch" value={user.branch} onChange={(e) => onInputChange(e)}
                       className="form-input input4" placeholder='Branch*'/>
                {/*<select className="form-input input5">*/}
                {/*    <option value="" disabled selected hidden>College Name*</option>*/}
                {/*    <option value="college1">College 1</option>*/}
                {/*    <option value="college2">College 2</option>*/}
                {/*    <option value="college3">College 3</option>*/}
                {/*</select>*/}
                <Creatable
                    formatCreateLabel={(inputText) => `"${inputText}" Add your college`}
                    className="form-input input5"
                    //   value={this.state.college}
                    styles={customStyles}
                    placeholder="College Name *"
                    onChange={handleChange2}
                    options={college}
                />
                <input 
                       required
                    //    type='number'
                       name="branch"
                       value={user.contact}
                       onChange={(e) => validateMobileNumber(e)}
                       className="form-input input6" 
                       placeholder='Phone Number*'
                       />{""}    
                {mobile_check && (
                  <div className="text-danger">
                    Please enter valid Mobile Number
                  </div>
                )}
                
                <input type="text" name="year" required value={user.year} onChange={(e)=>onInputChange(e)} className="form-input input7" placeholder='Year*'/>
            </div>
            <div className="Zevents-box">
              {isDancing && (
                <div className="Zevents">
                  <div className="forcol1">
                    <div className="fill-it-email">For TGT Dancing</div>
                  </div>
                  <div className="ZenentName">
                    <input
                      type="checkbox"
                      id="solo"
                      name="solo"
                      value="solo"
                      onChange={onChangeDancing}
                      checked={user.tgt_dancing_category.includes("solo")}
                    />
                    <label>Solo</label>
                    <br />
                    <input
                      type="checkbox"
                      id="team"
                      name="team"
                      checked={user.tgt_dancing_category.includes("team")}
                      value="team"
                      onChange={onChangeDancing}
                    />
                    <label>Team</label>
                  </div>
                </div>
              )}
              {isSinging && (
                <div className="Zevents">
                  <div className="forcol1">
                    <div className="fill-it-email">For TGT Singing</div>
                  </div>
                  <div className="ZenentName">
                    <input
                      type="checkbox"
                      id="solo"
                      name="solo"
                      value="solo"
                      checked={user.tgt_singing_category.includes("solo")}
                      onChange={onChangeSinging}
                    />
                    <label>Solo</label>
                    <br />
                    <input
                      type="checkbox"
                      id="team"
                      name="team"
                      checked={user.tgt_singing_category.includes("team")}
                      value="team"
                      onChange={onChangeSinging}
                    />
                    <label>Team</label>
                  </div>
                </div>
              )}
            </div>
            {error && (
              <div
                className="text-danger"
                dangerouslySetInnerHTML={{ __html: errorMsg }}
              ></div>
            )}
            <button className='reg-submit-button' disabled={!active} type='submit'
                    style={active == true ? {background: `${props.submit}`} : {background: "#CCC"}}>
                {/*<button className="register-btn Zbtn-reg" disabled={!active} style={active == true ? {background: "rgb(68, 37, 27)"} : {background: "#CCC"}}>*/}
                {loading ? (
                    <CircularProgress color="inherit" size={20}/>
                ) : (
                    "Submit"
                )}
            </button>
        </form>
        </>
    );
}

export default RegisterForm;
