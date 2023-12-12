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
      fontSize: '80px',
      fontWeight: 400,
      margin: 0
    },
    h2: {
      fontSize: '48px'
    },
    h3: {
      fontSize: '32px',
      fontWeight: 300,
      margin: 0
    },
    h4: {
      fontSize: '24px'
    },
    h5: {
      fontSize: '20px',
      fontWeight: 200
    }
  }
});
