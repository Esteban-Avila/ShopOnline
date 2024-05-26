import React from "react";
import logo from '../assets/logonom-original.png';
import './Headed.css';
function Headed(){
    return(
        <div className="logo-container">
            <img src={logo} alt="logo" className="logo"/>
        </div>
    )
};

export default Headed;
