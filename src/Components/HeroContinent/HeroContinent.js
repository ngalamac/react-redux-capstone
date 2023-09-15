import React from 'react';
import { useParams } from 'react-router-dom';
import URL_IMAGE from '../../Utils/mapImage';

const HeroContinent = () => {
  const { region } = useParams();
  const continentName = region.toLowerCase();
  return (
    <div className="hero__continent">
      <img
        className="hero__continent-image"
        src={continentName === 'americas' ? `${URL_IMAGE}/america/vector.svg` : `${URL_IMAGE}/${continentName}/vector.svg`}
        alt=""
      />
      <p className="hero__continent-name">{region}</p>
    </div>
  );
};

export default HeroContinent;
