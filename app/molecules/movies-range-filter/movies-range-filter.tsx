import {useCallback, useState, type FC} from 'react';
import {StyleSheet, View} from 'react-native';
import CustomText from '../../atoms/custom-text';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {colors} from '../../styles/styles-variables';

interface MoviesRangeFilterProps {}

const MoviesRangeFilter: FC<MoviesRangeFilterProps> = () => {
  const [range, setRange] = useState([1980, 2024]);

  const handleRangeChange = useCallback((values: number[]) => {
    setRange(values);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.labels}>
        <CustomText color="yellow" style={styles.label}>
          {range[0]}
        </CustomText>
        <CustomText color="yellow" style={styles.label}>
          {range[1]}
        </CustomText>
      </View>
      <View style={styles.multiSliderWrapper}>
        <MultiSlider
          values={range}
          min={1980}
          max={2024}
          step={1}
          onValuesChange={handleRangeChange}
          selectedStyle={styles.selectedTrack}
          unselectedStyle={styles.unselectedTrack}
          markerStyle={styles.marker}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  multiSliderWrapper: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  container: {},
  labels: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  label: {
    fontVariant: ['tabular-nums'],
  },
  selectedTrack: {
    backgroundColor: colors.yellow,
  },
  unselectedTrack: {
    backgroundColor: colors.secondary_bg,
  },
  marker: {
    height: 20,
    width: 20,
    backgroundColor: colors.gray,
    borderColor: colors.yellow,
    borderRadius: 10,
  },
});

export default MoviesRangeFilter;
