import React from 'react';
import Headed from '../Components/Headed';
import NavBar from '../Components/NavBar/NavBar';
import Social from '../Components/foot/Social';

const Payments = () => {
  return (
    <div>
      <div>
        <Headed />
        <NavBar />
      </div>
      <h1>Polithics Page</h1>
      <div>
        <Social />
      </div>
    </div>
  );
};

export default Payments;
