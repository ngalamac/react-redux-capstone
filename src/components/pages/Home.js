import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRegion } from '../../features/countries/countrySlice';

import Navbar from '../Navbar';
import Card from '../Card';

const Home = () => {
  const [region, setRegion] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    if (region !== '') {
      dispatch(getRegion(region));
    }
  }, [dispatch, region]);

  return (
    <section className="homeMainContainer">
      <Navbar title="Country List" />
      <div className="homeBg">
        <h1 className="homeTitle"> Nation Navigator</h1>
      </div>
      <div className="search">
        <select
          className="select"
          type="text"
          name="region"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value="">View by Region</option>
          <option value="Asia">Asia Pacific</option>
          <option value="America">America</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <Card />
    </section>
  );
};

export default Home;
