import React from 'react';
import { Link } from 'react-router-dom';
// import './Header.css';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-logo">
          <h1>XYZ Bank</h1>
        </div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
