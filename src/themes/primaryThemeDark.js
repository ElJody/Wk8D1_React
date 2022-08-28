
import {createTheme} from '@mui/material/styles';

export const themeOptions= {
  palette: {
    type: 'dark',
    mode: 'dark',
    primary: {
      main: '#a4ac86',
      light: '#c2c5aa',
      dark: '#a4ac86',
    },
    secondary: {
      main: '#7f4f24',
    },
    error: {
      main: '#f44336',
    },
    divider: '#582f0e',
    background: {
      default: '#c2c5aa',
    },
  },
};



const theme=createTheme(themeOptions);
export default theme;