// src/App.js
import React from 'react';
import Home from "../src/components/Home/home.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Jaipur from "../src/components/pages/jaipur/jaipur.js";
import Chandigarh from "../src/components/pages/chandigarh/chandigarh.js";
import Lucknow from "../src/components/pages/lucknow/lucknow.js";
import Banglore from "../src/components/pages/banglore/banglore.js";
import Cards from "../src/components/pages/card/card.js";
import JaipurReg from './components/Register/jaipur/jaipurreg.js';
// import RegJaipur from './components/pages/registration/RegJaipur.js';



// import LucknowReg from './components/ZonalRegistration/LucknowReg.js';
// import JaipurReg from './components/pages/registration/RegJaipur.js';
// import BangloreReg from './components/ZonalRegistration/BangloreReg.js';
// import ChandigarhReg from './components/ZonalRegistration/ChandigarhReg.js';
import Footer from "../src/components/Footer/Footer.js";
import RegisterForm from './components/RegisterForm/registerform.js';
import BangaloreReg from './components/Register/banglore/banglorereg.js';
import LucknowReg from './components/Register/lucknow/lucknowreg.js';
import ChandigarhReg from './components/Register/chandigarh/chandigarhreg.js';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/jaipur" element={<Jaipur/>}/>
        {/* <Route path="/jaipur/registration/:id" element={<JaipurReg/>}/> */}
        <Route path="/chandigarh" element={<Chandigarh/>}/>
        <Route path="/lucknow" element={<Lucknow/>}/>


        {/* <Route path="/register" element={<RegisterForm/>}/> */}
        <Route path="/jaipur/registration/:id" element={<JaipurReg/>}/>
        <Route path="/banglore/registration/:id" element={<BangaloreReg/>}/>
        <Route path="/lucknow/registration/:id" element={<LucknowReg/>}/>
        <Route path="/chandigarh/registration/:id" element={<ChandigarhReg/>}/>


        <Route path="/banglore" element={<Banglore/>}/>
        <Route path="/card" element={<Cards/>}/>
        <Route path="/footer" element={<Footer/>}/>


        {/* <Route exact={true} path="/lucknowreg/:id" element={<LucknowReg />} />
          <Route exact={true} path="/jaipurreg/:id" element={<JaipurReg />} />
          <Route exact={true} path="/bangaorereg/:id" element={<BangloreReg />} />

          <Route
            exact={true}
            path="/chandigarhreg/:id"
            element={<ChandigarhReg />}
          /> */}
        
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
