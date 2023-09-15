import React from 'react';
import continentsData from '../../Utils/continentData';
import Continent from '../Continent/Continent';

const Continents = () => (
  <div className="continents">
    <div>
      <p className="hero__continent-title">Choose a Continent :</p>
    </div>
    <ul className="continents_container">
      {continentsData.map((continent) => (
        <Continent
          key={continent}
          name={continent}
        />
      ))}
    </ul>
  </div>

);

export default Continents;
