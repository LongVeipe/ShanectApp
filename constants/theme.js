import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  // base colors
  primary: '#c55880', // pink
  lightPink: '#efd0db',
  darkPink: '#521d30',
  secondary: '#D37E9C',

  logoViolet: '#351CC6',
  logoPink: '#C74A93',

  // colors
  black: '#1E1F20',
  white: '#FFFFFF',

  lightGray: '#F5F5F6',
  lightGray2: '#F6F6F7',
  lightGray3: '#EFEFF1',
  lightGray4: '#e5e5e5',
  transparent: 'transparent',
  darkgray: '#636469',

  accent: '#D8211B',
  red: '#cc1812',
  deepRed2: '#630118',

  blue: '#2D88FF',
};

export const DARK_THEME = {
  primaryBackground: '#3d3d3d',
  primaryBackgroundLight: '#797979',

  secondaryBackground: '#ffffff',
  secondaryBackgroundLight: '#f7f7f7',

  primaryText: '#ffffff',
  primaryTextLight: '#f7f7f7',
  secondaryText: '#3d3d3d',
  primaryTextBackground: '#3d3d3d',
  secondaryTextBackground: '#ffffff',
};
export const LIGHT_THEME = {
  primaryBackground: '#ffffff',
  primaryBackgroundLight: '#f7f7f7',

  secondaryBackground: '#3d3d3d',
  secondaryBackgroundLight: '#797979',

  primaryText: '#3d3d3d',
  primaryTextLight: '#797979',
  secondaryText: '#ffffff',
  primaryTextBackground: '#ffffff',
  secondaryTextBackground: '#3d3d3d',
};

export const COLOR_OPTIONS = {
  orange: {
    primaryFaint: '#FFF3E0',
    primaryLight: '#FFB74D',
    primary: '#FF9800',
    primaryBold: '#EF6C00',
    primaryForeground: '#ffffff',
  },
  red: {
    primaryFaint: '#FFEBEE',
    primaryLight: '#E57373',
    primary: '#F44336',
    primaryBold: '#C62828',
    primaryForeground: '#ffffff',
  },
  blue: {
    primaryFaint: '#E3F2FD',
    primaryLight: '#64B5F6',
    primary: '#2196F3',
    primaryBold: '#1565C0',
    primaryForeground: '#ffffff',
  },
  cyan: {
    primaryFaint: '#E0F7FA',
    primaryLight: '#4DD0E1',
    primary: '#00BCD4',
    primaryBold: '#00838F',
    primaryForeground: '#ffffff',
  },
  teal: {
    primaryFaint: '#E0F2F1',
    primaryLight: '#4DB6AC',
    primary: '#009688',
    primaryBold: '#00695C',
    primaryForeground: '#ffffff',
  },
  gray: {
    primaryFaint: '#FAFAFA',
    primaryLight: '#E0E0E0',
    primary: '#9E9E9E',
    primaryBold: '#424242',
    primaryForeground: '#ffffff',
  },
  purlple: {
    primaryFaint: '#EDE7F6',
    primaryLight: '#9575CD',
    primary: '#673AB7',
    primaryBold: '#4527A0',
    primaryForeground: '#ffffff',
  },
  pink: {
    primaryFaint: '#efd0db',
    primaryLight: '#d687a3',
    primary: '#c55880',
    primaryBold: '#521d30',
    primaryForeground: '#ffffff',
  },
  green: {
    primaryFaint: '#E8F5E9',
    primaryLight: '#81C784',
    primary: '#4CAF50',
    primaryBold: '#2E7D32',
    primaryForeground: '#ffffff',
  },
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 15,
  padding: 10,
  padding2: 12,

  // font sizes
  logoName: 50,
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,

  header: 70,
};

export const FONTS = {
  logoName: {
    fontFamily: 'cassannet',
    fontWeight: 'bold',
    fontSize: SIZES.logoName,
    lineHeight: 55,
  },
  largeTitle: {
    fontFamily: 'Roboto-regular',
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: {
    fontFamily: 'Roboto-Black',
    fontWeight: 'bold',
    fontSize: SIZES.h1,
    lineHeight: 36,
  },
  h2: {
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    fontSize: SIZES.h2,
    lineHeight: 30,
  },
  h3: {
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    fontSize: SIZES.h3,
    lineHeight: 22,
  },
  h4: {
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    fontSize: SIZES.h4,
    lineHeight: 22,
  },
  body1: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body1, lineHeight: 36},
  body2: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body2, lineHeight: 30},
  body3: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body3, lineHeight: 22},
  body4: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body4, lineHeight: 22},
  body5: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body5, lineHeight: 22},
};

const appTheme = {COLORS, SIZES, FONTS, DARK_THEME, LIGHT_THEME, COLOR_OPTIONS};

export default appTheme;
