import React from 'react';
import PropTypes from 'prop-types';
import { IoIosSearch } from 'react-icons/io';

const SearchCountry = ({ handleSearch }) => (
  <div className="search">
    <div className="search__container">
      <input
        className="search__input"
        type="text"
        placeholder="Search a Country..."
        onChange={(event) => handleSearch(event)}
      />
      <IoIosSearch className="search__icon" />
    </div>
  </div>

);

export default SearchCountry;

SearchCountry.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
