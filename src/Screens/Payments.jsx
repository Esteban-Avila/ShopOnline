import React from 'react';
import Headed from '../Components/Headed';
import NavBar from '../Components/NavBar/NavBar';
import Social from '../Components/Sections/Social';

const Payments = () => {
  return (
    <div>
      <div>
        <Headed />
        <NavBar />
      </div>
      <h1>Payments Page</h1>
      <div>
        <Social />
      </div>
    </div>
  );
};

export default Payments;
