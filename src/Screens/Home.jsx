import React, { useEffect } from 'react';
const Home = ({ setMessage }) => {
  useEffect(() => {setMessage('Welcome to the Home page.');}, [setMessage]);
  return (
    <div>
      <h1>Home Page</h1>
      <div>
      <p>Welcome to the Home page.</p>
      </div>
    </div>
  );
};



export default Home;
