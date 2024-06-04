import React, { useState, useEffect } from 'react';
import Headed from '../Components/Headed';
import NavBar from '../Components/NavBar/NavBar';
import Catalogo from '../Catalogo.json';
import '../Style/Products.css'; // Asegúrate de crear y ajustar este archivo CSS para el diseño

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState({
    manillas: true,
    collares: true,
    chokers: true,
    aretes: true,
    candongas: true,
  });

  useEffect(() => {
    setProducts(Catalogo);
  }, []);

  useEffect(() => {
    filterProducts(products, filter);
  }, [filter, products]);

  const filterProducts = (products, filter) => {
    if (Object.values(filter).every(value => !value)) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => filter[product.category]);
      setFilteredProducts(filtered);
    }
  };

  const handleFilterChange = (category) => {
    setFilter({
      ...filter,
      [category]: !filter[category]
    });
  };

  return (
    <div>
      <Headed />
      <NavBar />
      <div className="container">
        <div className="sidebar">
          <h2>CATEGORÍA</h2>
          <div>
            <label>
              <input
                type="checkbox"
                checked={filter.manillas}
                onChange={() => handleFilterChange('manillas')}
              />
              Manillas
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={filter.collares}
                onChange={() => handleFilterChange('collares')}
              />
              Collares
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={filter.chokers}
                onChange={() => handleFilterChange('chokers')}
              />
              Chokers
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={filter.candongas}
                onChange={() => handleFilterChange('candongas')}
              />
              Candongas
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={filter.aretes}
                onChange={() => handleFilterChange('aretes')}
              />
              Aretes
            </label>
          </div>
        </div>
        <div className="products">
          <div className="product-list">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-item">
                <img src={product.image} alt={product.name} className="product-image" />
                <div>{product.name}{'\n'}${product.price}</div>
                <button className='add-button'>Agregar</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
