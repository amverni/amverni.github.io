import { createTheme } from '@mui/material/styles';
import {
  cyan, indigo, grey
} from '@mui/material/colors';

export const TYPOGRAPHY_SMALL_THRESHOLD = 650;
export const TYPOGRAPHY_LARGE_THRESHOLD = 880;
const SMALL_MEDIA_QUERY = `@media (max-width: ${TYPOGRAPHY_SMALL_THRESHOLD}px)`;
const MEDIUM_MEDIA_QUERY = `@media (max-width: ${TYPOGRAPHY_LARGE_THRESHOLD}px)`;
const LARGE_MEDIA_QUERY = `@media (min-width: ${TYPOGRAPHY_LARGE_THRESHOLD + 1}px)`;

const isDarkMode = window.matchMedia?.('(prefers-color-scheme: dark)').matches;

export const getSecondaryGradientColor = (theme: AppTheme): string => (
  isDarkMode ? theme.palette.secondary.dark : theme.palette.secondary.main
);

export const getPrimaryGradientColor = (theme: AppTheme): string => (
  isDarkMode ? theme.palette.primary.dark : theme.palette.primary.main
);

export const getShadowColor = (): string => (isDarkMode ? 'black' : 'gray');

export const appTheme = createTheme({
  palette: {
    mode: isDarkMode ? 'dark' : 'light',
    primary: indigo,
    secondary: cyan,
    common: {
      white: 'white',
      black: '#121212'
    },
    grey
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    h1: {
      fontWeight: 500,
      margin: 0,
      textAlign: 'center',
      [LARGE_MEDIA_QUERY]: {
        fontSize: '64px'
      },
      [MEDIUM_MEDIA_QUERY]: {
        fontSize: '52px'
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
      textAlign: 'center',
      color: isDarkMode ? grey[100] : grey[900],
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
      textAlign: 'left',
      color: isDarkMode ? grey[100] : grey[900],
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
      color: isDarkMode ? grey[200] : grey[800],
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
      fontWeight: 700,
      margin: 0,
      textAlign: 'left',
      color: isDarkMode ? grey[200] : grey[800],
      [LARGE_MEDIA_QUERY]: {
        fontSize: '20px'
      },
      [MEDIUM_MEDIA_QUERY]: {
        fontSize: '17px'
      },
      [SMALL_MEDIA_QUERY]: {
        fontSize: '16px'
      }
    },
    h5: {
    },
    h6: {
      color: isDarkMode ? grey[100] : grey[900],
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
      color: isDarkMode ? grey[100] : grey[900],
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
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale'
        },
        code: {
          fontFamily: [
            'source-code-pro',
            'Menlo',
            'Monaco',
            'Consolas',
            '"Courier New"',
            'monospace'
          ].join(',')
        }
      }
    },
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
            boxShadow: `-2px 2px 6px 0px ${getShadowColor()}`,
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
