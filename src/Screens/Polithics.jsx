import React from 'react';
import Headed from '../Components/Headed';
import NavBar from '../Components/NavBar/NavBar';
import textp from '../Politicas.json';
import '../Style/Polithics.css' // Cambiado a 'textp'

const Polithics = () => {
  return (
    <div>
      <div>
        <Headed />
        <NavBar />
      </div>
      <div className="container_Poli" style={{ textAlign: 'justify' }}>
        {textp.parrafos.map((parrafo, index) => (
          <p key={index}>{parrafo}</p>
        ))}
      </div>
    </div>
  );
};

export default Polithics;

