import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
const links = [
  { name: "Home", href: "/Home"},
  { name: "Login", href: "/Login" },
  { name: "Sign Up", href: "/SignUp" },
  { name: "Products", href: "/Products" },
  { name: "Politics", href: "/Politics" },
  { name: "Payments", href: "/Payments" },
];

const NavBar = ({ setMessage }) => {
  return (
    <nav className='navbar'>
      <ul>
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
