import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import fetchCountries from '../../Services/restCountriesAPI';
import Country from '../../Components/Country/Country';
import HeroContinent from '../../Components/HeroContinent/HeroContinent';
import SearchCountry from '../../Components/SearchCountry/SearchCountry';

const Countries = () => {
  const [searchCountry, setSearchCountry] = useState('');
  const [loader, setLoader] = useState(false);

  const { region } = useParams();

  const countries = useSelector((state) => state.countries.countries);
  const loading = useSelector((state) => state.countries.status);
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    setSearchCountry(event.target.value);
  };

  const filterCountries = () => (countries.filter((country) => {
    if (searchCountry === '') {
      return country;
    } if (country.name.toLowerCase().includes(searchCountry.toLocaleLowerCase())) {
      return country;
    } return null;
  }));

  const filterCountry = filterCountries();

  useEffect(() => {
    dispatch(fetchCountries(region));
  }, []);

  useEffect(() => {
    if (loading !== 'uploaded') {
      setLoader(true);
    } else {
      setLoader(false);
    }
  }, [loading]);

  return (
    <div>
      <HeroContinent />
      <SearchCountry
        handleSearch={handleSearch}
      />
      {loader
        ? (
          <div className="progress__container">
            <div className="progress" />
          </div>
        )
        : (
          <ul className="countries__container">
            {filterCountry.map((country) => (
              <Country
                key={country.name}
                name={country.name}
                population={country.population}
                area={country.area}
                latitude={country.latitude}
                longitude={country.longitude}
                altSpelling={country.altSpelling}
                region={country.region}
              />
            ))}
          </ul>
        )}

    </div>

  );
};

export default Countries;
