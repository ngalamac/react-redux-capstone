import { createSlice } from '@reduxjs/toolkit';
import fetchCountries from '../../Services/restCountriesAPI';

const initialState = {
  countries: [],
  status: '',
};

const countriesSlice = createSlice({
  name: 'Countries',
  initialState,
  extraReducers: {
    [fetchCountries.pending]: (state) => ({
      ...state,
      status: 'loading',
    }),
    [fetchCountries.fulfilled]: (state, action) => ({
      ...state,
      countries: action.payload,
      status: 'uploaded',
    }),
    [fetchCountries.rejected]: (state) => ({
      ...state,
      status: 'failed',
    }),
  },
});

export default countriesSlice.reducer;
