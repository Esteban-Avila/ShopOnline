import React, { useEffect } from 'react';

const Polithics = ({ setMessage }) => {
  useEffect(() => {
    setMessage('Welcome to the Politics.');
  }, [setMessage]);

  return (
    <div>
      <h1>Politics page</h1>
      <p>Welcome to the Politics page.</p>
    </div>
  );
};

export default Polithics;
