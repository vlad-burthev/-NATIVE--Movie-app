import type {FC} from 'react';
import {View, ViewProps} from 'react-native';

interface FilterWigetsProps extends ViewProps {}

const FilterWigets: FC<FilterWigetsProps> = ({children}) => {
  return <View>{children}</View>;
};

export default FilterWigets;
