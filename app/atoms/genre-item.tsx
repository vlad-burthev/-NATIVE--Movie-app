import type {FC} from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import {colors} from '../styles/styles-variables';
import CustomText from './custom-text';

interface GenreItemProps extends ViewProps {}

const GenreItem: FC<GenreItemProps> = ({children, style}) => {
  return (
    <View style={[styles.genre, style]}>
      <CustomText fontSize="s" fontWeight="s">
        {children}
      </CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  genre: {
    backgroundColor: colors.secondary_bg,
    borderColor: colors.white,
    padding: 5,
  },
});

export default GenreItem;
