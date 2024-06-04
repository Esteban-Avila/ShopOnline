import React from "react";
import logo from '../assets/logonom-original.png';
import logoW from '../assets/whatsapp.png';
import logoT from '../assets/tiktok.png';
import logoIg from '../assets/ig.png';
import logoU from '../assets/user.png';
import './Headed.css';
import { Link } from "react-router-dom";

function Headed(){

    return(
        <div className="top">
            <div className="logo-container">
                <img src={logo} alt="logo" className="logo"/>
            </div>            
            
            <div className="btnSocial">   
                    <a href="https://www.instagram.com/marisella.jewelry?igsh=MWhpYng2aW1yZXhqcA=="><img src={logoIg} className="logos"></img></a>
                    <a href="https://www.tiktok.com/@marisella.jewelry"><img src={logoT} className="logos"></img></a>
                    <a href="https://wa.me/573001359534"><img src={logoW} className="logos"></img></a>
            </div>

            <div className="btn_varius">
                <ul id="links">
                    <li><Link id="itemH" to={'/Login'}>Entrar</Link></li>
                    <li><Link id="itemH" to={'/Payments'}>Carrito</Link></li>
                </ul>
            </div>
        </div>
    )
};

export default Headed;
