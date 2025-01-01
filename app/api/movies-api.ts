import {MOVIE_API_HOST, MOVIE_API_KEY, MOVIE_API_URL} from '@env';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

interface I_GetAllMovieResponseProps {
  limit: number;
  page: number;
}

console.log(MOVIE_API_URL + `/titles?page=${1}&limit=${1}`);

export const moviesAPI = createApi({
  reducerPath: 'moviesAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: MOVIE_API_URL,
    prepareHeaders: headers => {
      headers.set('x-rapidapi-key', MOVIE_API_KEY);
      headers.set('x-rapidapi-host', MOVIE_API_HOST);

      return headers;
    },
  }),
  endpoints: builder => ({
    getAllMovies: builder.query({
      query: ({page, limit}: I_GetAllMovieResponseProps) =>
        `/titles?page=${page}&limit=${limit}`,
      transformResponse: (response: any) => {
        return {
          items: response.results,
          nextPage: response.next,
        };
      },
    }),
  }),
});

export const {useGetAllMoviesQuery} = moviesAPI;
