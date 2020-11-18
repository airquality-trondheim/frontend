import { DefaultTheme } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import { PRIMARY } from './Colors';

export const { width, height } = Dimensions.get('window');
export const isSmallDevice = width < 375;
export const singleSideMargin = (width - 0.87 * width) / 2;
export const carouselHeight = height * 0.4;

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: '#fff',
    background: '#FFFFFF',
    tabIconDefault: '#ccc',
    card: PRIMARY,
  },
};
