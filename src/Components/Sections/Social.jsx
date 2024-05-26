import React from "react";
import '../Sections/StylesSections/Social.css';
// import logoW from '../../assets/whatsapp.png';
// import logoT from '../../assets/tiktok.png';
// import logoIg from '../../assets/ig.png'
function Bottom(){
    return(
        <div className="bottom">   
            <a href="https://www.instagram.com/marisella.jewelry?igsh=MWhpYng2aW1yZXhqcA=="><img src={logoIg} className="logos"></img></a>
            <a href="https://www.tiktok.com/@marisella.jewelry"><img src={logoT} className="logos"></img></a>
            <img src={logoW} className="logos"></img>
            <p className="texts">+57 300-999-4444</p>
            
        </div>
    )
};

export default Bottom;