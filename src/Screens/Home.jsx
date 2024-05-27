import React, { useState, useEffect } from 'react';
import Headed from '../Components/Headed';
import NavBar from '../Components/NavBar/NavBar';
import Social from '../Components/Sections/Social';
import '../StyleScreens/Home.css';
import productsData from '../products.json';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    // Simular la carga de datos
    setProducts(productsData);
  }, []);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const startIndex = currentPage * itemsPerPage;
  const displayedProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className='container-home'>
      <div>
        <Headed />
        <NavBar />
      </div>
      <div className='content'>
        <h1>Bienvenido</h1>
        <h2>Aretes</h2>
        {displayedProducts.length === 0 ? (
          <p>Cargando productos...</p>
        ) : (
          <div className='products-carousel'>
            {displayedProducts.map((product) => (
              <div key={product.id} className='product-card'>
                <img src={product.image} alt={product.name} className='product-image' /><br></br>
                <button className='add-button'>Agregar</button>
              </div>
            ))}
          </div>
        )}
        <div className='carousel-controls'>
          <button onClick={handlePrev}>Anterior</button>
          <button onClick={handleNext}>Siguiente</button>
        </div>

        <h2>Collares</h2>
        {displayedProducts.length === 0 ? (
          <p>Cargando productos...</p>
        ) : (
          <div className='products-carousel'>
            {displayedProducts.map((product) => (
              <div key={product.id} className='product-card'>
                <img src={product.image} alt={product.name} className='product-image' /><br></br>
                <button className='add-button'>Agregar</button>
              </div>
            ))}
          </div>
        )}
        <div className='carousel-controls'>
          <button onClick={handlePrev}>Anterior</button>
          <button onClick={handleNext}>Siguiente</button>
        </div>

        <h2>Manillas</h2>
        {displayedProducts.length === 0 ? (
          <p>Cargando productos...</p>
        ) : (
          <div className='products-carousel'>
            {displayedProducts.map((product) => (
              <div key={product.id} className='product-card'>
                <img src={product.image} alt={product.name} className='product-image' /><br></br>
                <button className='add-button'>Agregar</button>
              </div>
            ))}
          </div>
        )}
        <div className='carousel-controls'>
          <button onClick={handlePrev}>Anterior</button>
          <button onClick={handleNext}>Siguiente</button>
        </div>
      </div>
      <div>
        <Social />
      </div>
    </div>
  );
};

export default Home;
