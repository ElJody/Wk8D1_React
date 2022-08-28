import {createTheme} from "@mui/material/styles";


export const themeOptions = {
  palette: {
    type: 'light',
    mode: 'light',
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
components: {
  MUIAppBar: {
    styleOverrides: {
    colorInherit: {
      backgroundColor: '#c2c5aa',
      color:'inherit',
    },
  },
},
},
props: {
  MUIAppBAr: {
    color:'inherit',
  },
},
};

const theme=createTheme(themeOptions);
export default theme
