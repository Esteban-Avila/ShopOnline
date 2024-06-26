import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
const links = [
  { name: "Inicio", href: "/"},
  { name: "Productos", href: "/Products" },
  { name: "Politicas", href: "/Polithics"},
];

const NavBar = ({ setMessage }) => {
  return (
    <nav className='navbar'>
      <ul id="list">
        {links.map((x, index) => (
          <li key={index}>
            <Link id='items' to={x.href} onClick={() => setMessage(`You are on the ${x.name} page`)}>{x.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
