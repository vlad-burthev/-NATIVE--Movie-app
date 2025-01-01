import {configureStore} from '@reduxjs/toolkit';
import {moviesAPI} from '../api/movies-api';

export const store = configureStore({
  reducer: {
    [moviesAPI.reducerPath]: moviesAPI.reducer,
  },
  middleware: gDM => gDM().concat(moviesAPI.middleware),
});
