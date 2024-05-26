import React, { useEffect } from 'react';

const SingUp = ({ setMessage }) => {
  useEffect(() => {
    setMessage('Welcome to the Sign Up page.');
  }, [setMessage]);

  return (
    <div>
      <h1>Sign Up page</h1>
      <p>Welcome to the Sign Up page.</p>
    </div>
  );
};

export default SingUp;
