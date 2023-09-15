import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../../Components/Nav/Nav';

const AirPollution = () => (
  <>
    <Nav />
    <Outlet />
  </>
);

export default AirPollution;
