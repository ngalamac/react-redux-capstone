/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineLeft, AiFillSetting } from 'react-icons/ai';
import logo from '../assets/download.png';
import '../styles/BackNavigation.css';

function BackNavigation() {
  return (
    <header data-testid="back-navigation" className="team-detail-header">
      <Link to="/"><AiOutlineLeft /></Link>
      <img src={logo} alt="premiere league logo" />
      <AiFillSetting />
    </header>
  );
}

export default BackNavigation;
