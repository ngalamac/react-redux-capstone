import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL_BACKEND = 'https://restcountries.com/v3.1/region/';

const countryUrl = (region) => `${URL_BACKEND}${region}`;

const fetchCountries = createAsyncThunk('Countries/fetchCountries', async (region) => {
  const response = await axios.get(countryUrl(region));
  const countriesData = response.data.map((country) => ({
    altSpelling: country.altSpellings[0],
    area: country.area,
    latitude: country.latlng[0],
    longitude: country.latlng[1],
    name: country.name.common,
    population: country.population,
    region: country.region,
  }));
  return countriesData;
});

export default fetchCountries;
