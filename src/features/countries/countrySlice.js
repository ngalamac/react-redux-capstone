import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getCountries = createAsyncThunk('countries/getCountries', async (_, thunkAPI) => {
  try {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const data = res.json();
    return data;
  } catch (error) {
    const message = (Promise.reject(error));
    return thunkAPI.rejectWithValue(message);
  }
});

export const searchByCountry = createAsyncThunk('countries/searchByCountry', async (code, thunkAPI) => {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
    const data = response.json();
    return data;
  } catch (error) {
    const message = (Promise.reject(error));
    return thunkAPI.rejectWithValue(message);
  }
});

export const searchByRegion = createAsyncThunk('countries/searchByRegion', async (region, thunkAPI) => {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    const data = res.json();
    return data;
  } catch (error) {
    const message = (Promise.reject(error));
    return thunkAPI.rejectWithValue(message);
  }
});

const initialState = {
  countries: [],
  countryDetails: [],
  region: '',
  isLoading: false,
  error: false,
  success: false,
};

export const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    getRegion: (state, action) => {
      state.region = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCountries.pending, (state) => {
      state.isLoading = true;
    })
      .addCase(getCountries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.countries = action.payload;
        state.success = true;
      })
      .addCase(getCountries.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.message = action.payload;
        state.countries = [];
      })
      .addCase(searchByCountry.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchByCountry.fulfilled, (state, action) => {
        state.isLoading = false;
        state.countryDetails = action.payload;
        state.error = false;
        state.success = true;
      })
      .addCase(searchByCountry.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.message = action.payload;
        state.countryDetails = [];
      })
      .addCase(searchByRegion.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchByRegion.fulfilled, (state, action) => {
        state.isLoading = false;
        state.countries = action.payload;
        state.success = true;
      })
      .addCase(searchByRegion.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.message = action.payload;
      });
  },
});

export const { getRegion } = countrySlice.actions;
export default countrySlice.reducer;
