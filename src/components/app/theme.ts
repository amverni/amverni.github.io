import { createTheme } from '@mui/material/styles';
import { blue, deepPurple } from '@mui/material/colors';

export default createTheme({
  palette: {
    primary: blue,
    secondary: deepPurple
    // text:
  },
  typography: {
    h1: {
      fontSize: '5rem',
      fontWeight: 400,
      margin: 0
    },
    h2: {
      fontSize: '3rem'
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 300,
      margin: 0
    }
  }
});
