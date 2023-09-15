import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL_BACKEND = 'https://api.openweathermap.org/data/2.5/air_pollution';
const KEY = '3791b4d78793009d07ca991c93ad61af';

/* const airPollutionUrl = (lat, lon) => `${URL_BACKEND}?lat=${lat}&lon=${lon}&appid=${KEY}`; */

const fetchAirPollution = createAsyncThunk('Pollution/fetchAirPollution', async ({ latitude, longitude }) => {
  const response = await axios.get(`${URL_BACKEND}?lat=${latitude}&lon=${longitude}&appid=${KEY}`);
  const pollutionData = response.data;
  const result = [{
    components: pollutionData.list[0].components,
    aqi: pollutionData.list[0].main.aqi,
  }];
  return result;
});

export default fetchAirPollution;
