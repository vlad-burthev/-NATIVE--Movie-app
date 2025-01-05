import type {FC} from 'react';
import {View} from 'react-native';
import CustomText from '../../atoms/custom-text';
import {useRoute} from '@react-navigation/native';
import {MovieScreenRouteProp} from '../../navigation/types';
import {colors} from '../../styles/styles-variables';

interface MovieScreenProps {}

const MovieScreen: FC<MovieScreenProps> = () => {
  const route = useRoute<MovieScreenRouteProp>();

  const {movie_id} = route.params;

  return (
    <View
      style={{
        backgroundColor: colors.primary_bg,
      }}>
      <CustomText>Movie ID: {movie_id}</CustomText>
    </View>
  );
};

export default MovieScreen;
