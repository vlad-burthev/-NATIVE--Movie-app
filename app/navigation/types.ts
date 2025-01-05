import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Movie: {movie_id: string; movie_title: string};
};

export type ScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type MovieScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Movie'
>;
export type MovieScreenRouteProp = RouteProp<RootStackParamList, 'Movie'>;
