import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from './Screens/Home';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import Products from './Screens/Products';
import Politics from './Screens/Politics';
import Payments from './Screens/Payments';
import logo_light from './assets/logonom-original.png';
import Headed from './Components/Headed';
import Mid from './Components/Sections/mid';
import Bottom from './Components/Sections/bottom';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  return (
    <div className='main_container'>
      
      <div className='headed_container'>
        <Headed />
      </div>
      
    <div className='navbar_container'>
      <Router>
          <NavBar setMessage={setMessage} />
          <MessageDisplay message={message} />
          <Routes>
            <Route path="/Home" element={<Home setMessage={setMessage} />} />
            <Route path="/Login" element={<Login setMessage={setMessage} />} />
            <Route path="/SignUp" element={<SignUp setMessage={setMessage} />} />
            <Route path="/Products" element={<Products setMessage={setMessage} />} />
            <Route path="/Politics" element={<Politics setMessage={setMessage} />} />
            <Route path="/Payments" element={<Payments setMessage={setMessage} />} />
          </Routes>
        </Router>
    </div>
      <div>
        <Mid></Mid>
      </div>
      <div className='navbar_container'>
        <Bottom></Bottom>
      </div>

    </div>
  );
}

function MessageDisplay({ message }) {
  return (
    <div className="message">
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
