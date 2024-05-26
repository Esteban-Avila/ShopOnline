import React, { useEffect } from 'react';

const Products = ({ setMessage }) => {
  useEffect(() => {
    setMessage('Welcome to the Products page.');
  }, [setMessage]);

  return (
    <div>
      <h1>Products Page</h1>
      <p>Welcome to the Products page.</p>
    </div>
  );
};

export default Products;
