import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <header>
      <nav className="navigation">
        <button
          className="arrow-back  btn-icon"
          type="button"
          onClick={() => handleNavigate()}
        >
          <IoIosArrowBack
            className="icon"
          />
        </button>
        <h3 className="year">2023</h3>
      </nav>
    </header>
  );
};

export default Nav;
