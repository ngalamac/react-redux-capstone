import { configureStore } from '@reduxjs/toolkit';
import countryReducer, {
  getCountries,
  searchByCountry,
  searchByRegion,
  getRegion,
} from '../features/countries/countrySlice';

describe('countrySlice', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        countries: countryReducer,
      },
    });
  });

  it('should get all countries successfully', async () => {
    await store.dispatch(getCountries());
    const {
      countries, isLoading, error, success,
    } = store.getState().countries;

    expect(countries.length).toBeGreaterThan(0);
    expect(isLoading).toBe(false);
    expect(error).toBe(false);
    expect(success).toBe(true);
  });

  it('should get details of a country by code successfully', async () => {
    await store.dispatch(searchByCountry('usa'));
    const {
      countryDetails, isLoading, error, success,
    } = store.getState().countries;

    expect(countryDetails.length).toBeGreaterThan(0);
    expect(isLoading).toBe(false);
    expect(error).toBe(false);
    expect(success).toBe(true);
  });

  it('should get all countries of a region successfully', async () => {
    await store.dispatch(searchByRegion('americas'));
    const {
      countries, isLoading, error, success,
    } = store.getState().countries;

    expect(countries.length).toBeGreaterThan(0);
    expect(isLoading).toBe(false);
    expect(error).toBe(false);
    expect(success).toBe(true);
  });

  it('should update region state', () => {
    const region = 'africa';
    store.dispatch(getRegion(region));
    const { region: currentRegion } = store.getState().countries;

    expect(currentRegion).toBe(region);
  });
});
