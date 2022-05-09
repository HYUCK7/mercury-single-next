import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Cooper Black, KOMACON',
    fontSize: 15
  },
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#295F2E',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },

});

export default theme