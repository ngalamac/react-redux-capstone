import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './countries/countrySlice';

const store = configureStore({
  reducer: {
    country: countryReducer,
  },
});

export default store;
