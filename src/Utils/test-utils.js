/* eslint-disable react/prop-types */
import React from 'react';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import countriesSlice from '../Redux/Countries/countries';
import airPollutionSlice from '../Redux/Pollution/airPollution';

export default function renderWithProviders(
  ui,
  {
    store = configureStore(
      {
        reducer: {
          countries: countriesSlice,
          pollution: airPollutionSlice,
        },
      },
    ),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
