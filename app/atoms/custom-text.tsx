import type {FC} from 'react';
import React from 'react';
import {StyleProp, Text, TextProps, TextStyle} from 'react-native';
import {colors, font_size, font_weight} from '../styles/styles-variables';

interface CustomTextProps extends TextProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  fontSize?: keyof typeof font_size;
  color?: keyof typeof colors;
  fontWeight?: keyof typeof font_weight;
}

const CustomText: FC<CustomTextProps> = ({
  children,
  style,
  color = 'white',
  fontSize = 'm',
  fontWeight = 'm',
}) => {
  const textStyle = {
    color: colors[color],
    fontSize: font_size[fontSize],
    fontWeight: font_weight[fontWeight],
  };

  return <Text style={[textStyle, style]}>{children}</Text>;
};

export default CustomText;
