import {MOVIE_API_HOST, MOVIE_API_KEY, MOVIE_API_URL} from '@env';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

interface I_GetAllMovieResponseProps {
  limit?: number;
  page?: number;
  startYear?: number;
  endYear?: number;
  sort?: 'decr' | 'incr';
  info?:
    | 'base_info'
    | 'base_info'
    | 'mini_info'
    | 'image'
    | 'creators_directors_writers'
    | 'revenue_budget'
    | 'extendedCast'
    | 'rating'
    | 'awards';
}

console.log(
  MOVIE_API_URL +
    `/titles?page=${1}&limit=${1}&list=most_pop_movies&sort=year.decr`,
);

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
      query: ({
        page = 1,
        limit = 20,
        startYear = 1980,
        endYear = 2024,
        sort = 'decr',
        info = 'base_info',
      }: I_GetAllMovieResponseProps) =>
        `/titles?endYear=${endYear}&info=${info}&sort=year.${sort}&page=${page}&limit=${limit}&startYear=${startYear}`,
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
