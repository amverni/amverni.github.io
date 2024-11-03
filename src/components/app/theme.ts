import { createTheme } from '@mui/material/styles';
import {
  blue, blueGrey, cyan, indigo, teal
} from '@mui/material/colors';

export const TYPOGRAPHY_SMALL_THRESHOLD = 550;
export const TYPOGRAPHY_LARGE_THRESHOLD = 800;
const SMALL_MEDIA_QUERY = `@media (max-width: ${TYPOGRAPHY_SMALL_THRESHOLD}px)`;
const MEDIUM_MEDIA_QUERY = `@media (max-width: ${TYPOGRAPHY_LARGE_THRESHOLD}px)`;
const LARGE_MEDIA_QUERY = `@media (min-width: ${TYPOGRAPHY_LARGE_THRESHOLD + 1}px)`;

export const appTheme = createTheme({
  palette: {
    primary: indigo,
    secondary: cyan,
    common: {
      white: '#fff',
      black: '#000'
    },
    grey: blueGrey
  },
  typography: {
    h1: {
      fontWeight: 500,
      margin: 0,
      [LARGE_MEDIA_QUERY]: {
        fontSize: '80px'
      },
      [MEDIUM_MEDIA_QUERY]: {
        fontSize: '56px'
      },
      [SMALL_MEDIA_QUERY]: {
        fontSize: '44px'
      }
    },
    subtitle1: {
      fontWeight: 300,
      margin: 0,
      [LARGE_MEDIA_QUERY]: {
        fontSize: '32px'
      },
      [MEDIUM_MEDIA_QUERY]: {
        fontSize: '24px'
      },
      [SMALL_MEDIA_QUERY]: {
        fontSize: '20px'
      }
    },
    h2: {
      fontWeight: 500,
      margin: 0,
      color: blueGrey[900],
      [LARGE_MEDIA_QUERY]: {
        fontSize: '40px'
      },
      [MEDIUM_MEDIA_QUERY]: {
        fontSize: '36px'
      },
      [SMALL_MEDIA_QUERY]: {
        fontSize: '32px'
      }
    },
    h3: {
      fontWeight: 500,
      margin: 0,
      color: blueGrey[900],
      [LARGE_MEDIA_QUERY]: {
        fontSize: '32px'
      },
      [MEDIUM_MEDIA_QUERY]: {
        fontSize: '28px'
      },
      [SMALL_MEDIA_QUERY]: {
        fontSize: '24px'
      }
    },
    subtitle2: {
      fontWeight: 400,
      margin: 0,
      color: blueGrey[800],
      [LARGE_MEDIA_QUERY]: {
        fontSize: '24px'
      },
      [MEDIUM_MEDIA_QUERY]: {
        fontSize: '22px'
      },
      [SMALL_MEDIA_QUERY]: {
        fontSize: '20px'
      }
    },
    h4: {
    },
    h5: {
    },
    h6: {
      color: blueGrey[900],
      [LARGE_MEDIA_QUERY]: {
        fontSize: '24px'
      },
      [MEDIUM_MEDIA_QUERY]: {
        fontSize: '22px'
      },
      [SMALL_MEDIA_QUERY]: {
        fontSize: '20px'
      }
    },
    body1: {
      textAlign: 'justify',
      margin: '10px 0',
      color: blueGrey[700],
      [LARGE_MEDIA_QUERY]: {
        fontSize: '18px'
      },
      [MEDIUM_MEDIA_QUERY]: {
        fontSize: '17px'
      },
      [SMALL_MEDIA_QUERY]: {
        fontSize: '16px'
      }
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
          transition: theme.transitions.create(['background-color', 'box-shadow', 'transform'], { duration: theme.transitions.duration.shortest, delay: '50ms' }),
          '&:hover': {
            backgroundColor: theme.palette.primary.main,
            boxShadow: '-2px 2px 6px 0px gray',
            transform: 'translate(1px, -1px)'
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
            theme.transitions.create(['color', 'box-shadow', 'transform', 'filter', 'height', 'width'], { duration: theme.transitions.duration.shortest, delay: '50ms' }),
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
