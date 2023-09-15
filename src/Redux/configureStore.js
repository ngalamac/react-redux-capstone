import { configureStore } from '@reduxjs/toolkit';
import countriesSlice from './Countries/countries';
import airPollutionSlice from './Pollution/airPollution';

const store = configureStore({
  reducer: {
    countries: countriesSlice,
    pollution: airPollutionSlice,
  },
});

export default store;
