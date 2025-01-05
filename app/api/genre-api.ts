import {MOVIE_API_HOST, MOVIE_API_KEY, MOVIE_API_URL} from '@env';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const genreAPI = createApi({
  reducerPath: 'genreAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: MOVIE_API_URL + '/titles/utils/genres',
    prepareHeaders: headers => {
      headers.set('x-rapidapi-key', MOVIE_API_KEY);
      headers.set('x-rapidapi-host', MOVIE_API_HOST);

      return headers;
    },
  }),
  endpoints: builder => ({
    getGenres: builder.query({
      query: () => '',
    }),
  }),
});

export const {useGetGenresQuery} = genreAPI;
