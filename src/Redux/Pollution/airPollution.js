import { createSlice } from '@reduxjs/toolkit';
import fetchAirPollution from '../../Services/airPollutionAPI';

const initialState = {
  pollution: [],
  status: '',
};

const airPollutionSlice = createSlice({
  name: 'Pollution',
  initialState,
  extraReducers: {
    [fetchAirPollution.pending]: (state) => ({
      ...state,
      status: 'loading',
    }),
    [fetchAirPollution.fulfilled]: (state, action) => ({
      ...state,
      pollution: action.payload,
      status: 'uploaded',
    }),
    [fetchAirPollution.rejected]: (state) => ({
      ...state,
      status: 'failed',
    }),
  },
});

export default airPollutionSlice.reducer;
