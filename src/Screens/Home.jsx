import React, { useState, useEffect } from 'react';
import Headed from '../Components/Headed';
import NavBar from '../Components/NavBar/NavBar';
import Social from '../Components/foot/Social';
import prev from '../assets/previus.png';
import next from '../assets/next.png';
import '../Style/Home.css';
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

      <div className='container-photo'>
          <h1>COLLARES UNICOS</h1>
          <button className='more'>MÁS</button>
      </div>
      
      <div className='content'>

        <h2>MÁS VENDIDOS</h2>
        {displayedProducts.length === 0 ? (
          <p>Cargando productos...</p>
        ) : (
          <div className='products-carousel'>

            <button className="btnprevius" onClick={handlePrev}><img src={prev} alt="btnprev"/></button>

            {displayedProducts.map((product) => (
              <div key={product.id} className='product-card'>
                <img src={product.image} alt={product.name} className='product-image' /><br></br>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <button className='add-button'>Agregar</button>
              </div>
            ))}

            <button className="buttomnext" onClick={handleNext}><img src={next} alt="btnnext"/></button>

          </div>
        )}

        <button className="moreP">Más productos</button>

      </div>

      <div className='container-comp'>
        <div class="leftHome">
          <button className=""></button>
        </div>
        <div class="rightHome"><h1>CANDONGAS</h1></div>
        
      </div>

      <div className='container-comp2'>
          <div className='sectionsa'>

          </div>

          <div className='sectionsig'>
            <h1>SIGUE A MARISELLA EN INSTAGRAM</h1>
            <a href="https://www.instagram.com/marisella.jewelry?igsh=MWhpYng2aW1yZXhqcA==">@marisella.jewelry</a>
          </div>
      </div>

      <div>
      <Social />
      </div>
    
    </div>
  );
};

export default Home;
