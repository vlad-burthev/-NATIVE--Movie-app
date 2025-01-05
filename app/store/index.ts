import {configureStore} from '@reduxjs/toolkit';
import {moviesAPI} from '../api/movies-api';
import {genreAPI} from '../api/genre-api';

export const store = configureStore({
  reducer: {
    [moviesAPI.reducerPath]: moviesAPI.reducer,
    [genreAPI.reducerPath]: genreAPI.reducer,
  },
  middleware: gDM => gDM().concat(moviesAPI.middleware, genreAPI.middleware),
});
