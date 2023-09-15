import React from 'react';
import Proptypes from 'prop-types';
import { NavLink, Outlet } from 'react-router-dom';
import { IoIosSettings } from 'react-icons/io';
import { FaMicrophone, FaAngleLeft } from 'react-icons/fa';

const Navbar = ({ title }) => (
  <header>
    <nav className="navbar">
      <NavLink to="/">
        <button type="button" className="button">
          <FaAngleLeft className="icons" />
        </button>
      </NavLink>
      <h2>{title}</h2>
      <div className="audioSettingDiv">
        <FaMicrophone className="icons margin-right" />
        <IoIosSettings className="icons" />
      </div>
    </nav>
    <Outlet />
  </header>
);
Navbar.propTypes = {
  title: Proptypes.string.isRequired,
};

export default Navbar;
