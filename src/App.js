// src/App.js
import React from 'react';
import Home from "../src/components/Home/home.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
