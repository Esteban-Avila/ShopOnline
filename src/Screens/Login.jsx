import React, { useEffect } from 'react';
const Login = ({ setMessage }) => {
  useEffect(() => {
    setMessage('Please log in to continue.');
  }, [setMessage]);

  return (
    <div>
      <h1>Login Page</h1>
      <div>
      <p>Please log in to continue.</p>
      </div>
    </div>
  );
};

export default Login;
