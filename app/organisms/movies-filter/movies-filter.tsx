import React, {useState} from 'react';
import type {FC} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import CustomText from '../../atoms/custom-text';
import {colors} from '../../styles/styles-variables';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import MoviesRangeFilter from '../../molecules/movies-range-filter/movies-range-filter';
import MoviesGenteFilter from '../../molecules/movies-gente-filter/movies-gente-filter';

interface MoviesFilterProps {}

const MoviesFilter: FC<MoviesFilterProps> = () => {
  const [showFilters, setShowFilters] = useState(false);

  const height = useSharedValue(0);
  const opacity = useSharedValue(0);

  const toggleFilter = () => {
    setShowFilters(prev => !prev);

    if (!showFilters) {
      height.value = withSpring(300, {
        damping: 15,
      });
      opacity.value = withTiming(1, {duration: 300});
    } else {
      height.value = withSpring(0, {
        damping: 15,
      });
      opacity.value = withTiming(0, {duration: 300});
    }
  };

  const animatedStyle = useAnimatedStyle(() => ({
    height: height.value,
    opacity: opacity.value,
  }));

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleFilter} style={styles.filterButton}>
        <CustomText>Filter</CustomText>
      </TouchableOpacity>
      <Animated.View style={[styles.animatedView, animatedStyle]}>
        <View style={{flex: 1}}>
          <MoviesRangeFilter />
          <MoviesGenteFilter />
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  filterButton: {
    padding: 10,
    backgroundColor: colors.secondary_bg,
    borderRadius: 8,
    alignItems: 'center',
  },
  animatedView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MoviesFilter;
