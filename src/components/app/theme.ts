import { createTheme } from '@mui/material/styles';
import { blue, blueGrey, deepPurple } from '@mui/material/colors';

export const appTheme = createTheme({
  palette: {
    primary: blue,
    secondary: deepPurple,
    common: {
      white: '#fff',
      black: '#000'
    }
  },
  typography: {
    h1: {
      fontSize: '80px',
      fontWeight: 500,
      margin: 0
    },
    subtitle1: {
      fontSize: '32px',
      fontWeight: 300,
      margin: 0
    },
    h2: {
      fontSize: '40px',
      fontWeight: 500,
      margin: 0,
      color: blueGrey[900]
    },
    h3: {
      fontSize: '32px',
      fontWeight: 500,
      margin: 0,
      color: blueGrey[900]
    },
    subtitle2: {
      fontSize: '24px',
      fontWeight: 400,
      margin: 0,
      color: blueGrey[800]
    },
    h4: {
    },
    h5: {
    },
    h6: {
      fontSize: '24px',
      color: blueGrey[900]
    },
    body1: {
      fontSize: '20px',
      textAlign: 'justify',
      margin: '10px 0',
      color: blueGrey[700]
    }
  },
  transitions: {
    easing: {
      easeInOut: 'ease-in-out'
    }
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: ({ theme }) => ({
            ...theme.typography.body1,
            textTransform: 'unset',
            borderRadius: '1000px',
            maxWidth: 'fit-content',
            transition: theme.transitions.create(['background-color', 'box-shadow'])
            // '&:hover': {
            // backgroundColor: theme.palette.secondary.main
            // }
          })
        }
      ]
    }
  }
});

export type AppTheme = typeof appTheme;
