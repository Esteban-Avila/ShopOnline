import React, { useEffect } from 'react';

const Payments = ({ setMessage }) => {
  useEffect(() => {
    setMessage('Make a payment.');
  }, [setMessage]);

  return (
    <div>
      <h1>Payments Page</h1>
      <p>Make a payment.</p>
    </div>
  );
};

export default Payments;
