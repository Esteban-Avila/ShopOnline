import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Headed from '../Components/Headed';
import NavBar from '../Components/NavBar/NavBar';
import Social from '../Components/foot/Social';
import prev from '../assets/previus.png';
import next from '../assets/next.png';
import CADS from '../../public/photos/CA-DS-Product.png';
import '../Style/Home.css';
import productsData from '../products.json';
import infoData from '../info.json';
import Modal from '../Components/modal';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isButton, setIsButton] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const handleMouseEnter = () => {
    setIsButton(true);
  };

  const handleMouseLeave = () => {
    setIsButton(false);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Products');
  };

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

  const openModal = (linkId) => {
    setModalData(infoData[linkId]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  return (
    <div className='container-home'>
      <div>
        <Headed />
        <NavBar />
      </div>

      <div className='container-photo'>
        <h1>COLLARES UNICOS</h1>
        <button className='more' onClick={handleClick}>MÁS</button>
      </div>

      <div className='content'>
        <h2>MÁS VENDIDOS</h2>
        {displayedProducts.length === 0 ? (
          <p>Cargando productos...</p>
        ) : (
          <div className='products-carousel'>
            <button className="btnprevius" onClick={handlePrev}>
              <img src={prev} alt="btnprev" />
            </button>
            {displayedProducts.map((product) => (
              <div key={product.id} className='product-card'>
                <img src={product.image} alt={product.name} className='product-image' /><br />
                <p>{product.name}</p>
                <p className="bold-text">{product.price}</p>
                <button className='add-button'>Agregar</button>
              </div>
            ))}
            <button className="buttomnext" onClick={handleNext}>
              <img src={next} alt="btnnext" />
            </button>
          </div>
        )}
        <button className="moreP" onClick={handleClick}>Más productos</button>
      </div>

      <div className='container-comp'>
        <div className="leftHome">
          <img src={CADS}></img>
          {isButton ? (
            <button
              className="btna"
              onMouseLeave={handleMouseLeave}
              onClick={handleClick}
            >
              Más productos
            </button>
          ) : (
            <label
              className="label-style"
              onMouseEnter={handleMouseEnter}
            >
              Varia segun tamaño{'\n\n'}$25.000
            </label>
          )}
        </div>
        <div className="rightHome">
          <h1 className="bold-text">CANDONGAS</h1>
        </div>
      </div>

      <div className='container-comp2'>
        <div className='sectionsa'>
          <div className='link1'>
            <p>Información</p>
            <h1>BISUTERIA</h1>
            <a onClick={() => openModal('link1')}>ver más</a>
          </div>
          <div className='link2'>
            <p>Productos</p>
            <h1>ACCESORIOS</h1>
            <a onClick={() => openModal('link2')}>ver más</a>
          </div>
          <div className='link3'>
            <p>Negocio</p>
            <h1>INFORMACIÓN</h1>
            <a onClick={() => openModal('link3')}>ver más</a>
          </div>
        </div>
        <div className='sectionsig'>
          <h1>SIGUE A MARISELLA EN INSTAGRAM</h1>
          <a href="https://www.instagram.com/marisella.jewelry?igsh=MWhpYng2aW1yZXhqcA==">@marisella.jewelry</a>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h1 className='title_M'>{modalData?.title}</h1>
        <p className='Content_M'>{modalData?.content}</p>
      </Modal>

      <div>
        <Social />
      </div>

    </div>
  );
};

export default Home;