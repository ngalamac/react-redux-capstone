import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import URL_IMAGE from '../../Utils/mapImage';

const Continent = ({ name }) => {
  const navigate = useNavigate();
  const handleCountries = () => {
    navigate(`/${name}`);
  };
  const continentName = name.toLowerCase();

  return (
    <li
      className="continent__card"
      onClick={() => handleCountries()}
      aria-hidden="true"
    >

      <img
        className="continent__card-image"
        src={continentName === 'americas' ? `${URL_IMAGE}/america/vector.svg` : `${URL_IMAGE}/${continentName}/vector.svg`}
        alt=""
      />
      <p className="continent__card-name">{name}</p>
    </li>
  );
};

export default Continent;

Continent.propTypes = {
  name: PropTypes.string.isRequired,
};
