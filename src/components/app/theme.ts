import { createTheme } from '@mui/material/styles';
import {
  blue, blueGrey, cyan, indigo, teal
} from '@mui/material/colors';

export const appTheme = createTheme({
  palette: {
    primary: indigo,
    secondary: cyan,
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
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.body1,
          textTransform: 'unset',
          borderRadius: '10px',
          maxWidth: 'fit-content',
          color: 'white',
          backgroundColor: theme.palette.primary.main,
          transition: theme.transitions.create(['background-color', 'box-shadow', 'transform'], { duration: theme.transitions.duration.shortest }),
          '&:hover': {
            backgroundColor: theme.palette.primary.main,
            boxShadow: '-2px 2px 6px 0px gray',
            transform: 'translate(2px, -2px)'
          },
          '&:active': {
            boxShadow: 'unset',
            transform: 'unset'
          }
        })
      }
    },
    MuiLink: {
      styleOverrides: {
        root: ({ theme }) => ({
          cursor: 'pointer',
          transition:
            theme.transitions.create(['color', 'box-shadow', 'transform', 'filter'], { duration: theme.transitions.duration.shortest }),
          '&:hover': {
            color: `${theme.palette.primary.light}`
          }
        })
      }
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: '0 24px'
        }
      }
    }
  }
});

export type AppTheme = typeof appTheme;
