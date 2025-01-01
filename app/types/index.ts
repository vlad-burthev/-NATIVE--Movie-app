import {store} from '../store';

export type T_RootState = ReturnType<typeof store.getState>;
export type T_AppDispatch = typeof store.dispatch;
export interface I_GetAllMovieResponseProps {
  limit: number;
  page: number;
}

export interface TitleText {
  text: string;
  __typename: string;
}

export interface TitleType {
  text: string;
  id: string;
  isSeries: boolean;
  isEpisode: boolean;
  __typename: string;
}

export interface YearRange {
  year: number;
  endYear: number | null;
  __typename: string;
}

export interface MovieItem {
  _id: string;
  id: string;
  primaryImage: unknown | null;
  titleType: TitleType;
  titleText: TitleText;
  originalTitleText: TitleText;
  releaseYear: YearRange;
  releaseDate: unknown | null;
}

export interface MoviesAPIResponse {
  results: MovieItem[];
  next: string | null;
  entries: number;
  page: string;
}
