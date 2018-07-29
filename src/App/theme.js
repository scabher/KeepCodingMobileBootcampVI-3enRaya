import { tint, desaturate } from 'polished';

const basicColors = {
  black: '#000',
  white: '#fff',
  secondary: desaturate(0.9, '#0099cc'),
  btnPrimary: '#ff9f1a',
  player1: '#1e3799',
  player2: '#eb2f06',
};

const theme = {
  colors: {
    ...basicColors,
    grayDark: tint(0.8, basicColors.black),
    grayLight: tint(0.1, basicColors.black),
  },
};

export default theme;
