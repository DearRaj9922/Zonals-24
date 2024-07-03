// src/App.js
import React from 'react';
import Home from "../src/components/Home/home.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Jaipur from "../src/components/pages/jaipur/jaipur.js";
import Chandigarh from "../src/components/pages/chandigarh/chandigarh.js";
import Lucknow from "../src/components/pages/lucknow/lucknow.js";
import Banglore from "../src/components/pages/banglore/banglore.js";
import Cards from "../src/components/pages/card/card.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/jaipur" element={<Jaipur/>}/>
        <Route path="/chandigarh" element={<Chandigarh/>}/>
        <Route path="/lucknow" element={<Lucknow/>}/>
        <Route path="/banglore" element={<Banglore/>}/>
        <Route path="/card" element={<Cards/>}/>
        
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
