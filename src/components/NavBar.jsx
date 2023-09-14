import React from 'react';
import logo from '../assets/download.png';
import '../styles/Navbar.css';

function NavBar() {
  return (
    <header>
      <img src={logo} alt="premiere league logo" />
    </header>
  );
}

export default NavBar;
