import {StyleSheet} from 'react-native';
import {colors} from '../../styles/styles-variables';

export const moviesListItemStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    position: 'absolute',
  },
  image: {
    padding: 10,
    borderRadius: 10,
  },
  noImage: {
    borderColor: colors.secondary_bg,
    borderWidth: 2,
    padding: 10,
  },
});
