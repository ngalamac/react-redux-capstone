import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import URL_IMAGE from '../../Utils/mapImage';

const Country = ({
  name, area, latitude, longitude, altSpelling,
}) => {
  const navigate = useNavigate();
  const handleAirPollution = () => {
    navigate(`/${name}/${altSpelling}/${latitude}/${longitude}`);
  };

  const imageCountry = altSpelling.toLowerCase();
  return (
    <li
      className="country__card"
      onClick={() => handleAirPollution()}
      aria-hidden="true"
    >
      <div className="country__card-hero">
        <img
          className="country__card-image"
          src={`${URL_IMAGE}/${imageCountry}/vector.svg`}
          alt=""
        />
      </div>

      <div className="country__card-info">
        <p className="country__card-name">{name}</p>
        <p className="country__card-area">
          {area}
          {' '}
          <span>
            km
            <sup>2</sup>
          </span>
        </p>
      </div>

    </li>
  );
};

export default Country;

Country.propTypes = {
  name: PropTypes.string.isRequired,
  area: PropTypes.number.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  altSpelling: PropTypes.string.isRequired,
};
