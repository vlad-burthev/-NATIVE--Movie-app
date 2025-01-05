import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home-screen/home-screen';
import {colors} from '../styles/styles-variables';
import {RootStackParamList} from './types';
import MovieScreen from '../screens/movie-screen/movie-screen';

const Stack = createNativeStackNavigator<RootStackParamList>();
export function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{
          title: 'Movies',
          headerStyle: {
            backgroundColor: colors.primary_bg,
          },
          headerTintColor: colors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={({route}) => ({
          title: route.params?.movie_title || 'Movie',
          headerStyle: {
            backgroundColor: colors.primary_bg,
          },
          headerTintColor: colors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
        getId={({params}) => params?.movie_id?.toString()}
        name="Movie"
        component={MovieScreen}
      />
    </Stack.Navigator>
  );
}
