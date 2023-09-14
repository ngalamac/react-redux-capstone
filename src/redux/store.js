import { configureStore } from '@reduxjs/toolkit';
import teamsReducer from './footballSlice';

const store = configureStore({
  reducer: {
    teams: teamsReducer,
  },
});

export default store;
