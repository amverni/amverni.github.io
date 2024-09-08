import { makeStyles } from '@mui/styles';
import { type AppTheme } from 'components/app/theme';

export const IS_SMALL_THRESHOLD = 550;
const SMALL_MEDIA_QUERY = `@media (max-width: ${IS_SMALL_THRESHOLD}px)`;
const LARGE_MEDIA_QUERY = `@media (min-width: ${IS_SMALL_THRESHOLD + 1}px)`;

export const useStyles = makeStyles<AppTheme>((theme) => ({
  navBarContainer: {
    display: 'flex',
    backgroundColor: theme.palette.common.black,
    position: 'sticky',
    top: 0,
    zIndex: 1,
    [LARGE_MEDIA_QUERY]: {
      justifyContent: 'center'
    }
  },
  navLinksContainer: {
    display: 'flex',
    gap: '0 20px',
    justifyContent: 'center',
    alignItems: 'center',
    [SMALL_MEDIA_QUERY]: {
      flexDirection: 'column',
      position: 'absolute',
      left: 0,
      top: '40px',
      backgroundColor: theme.palette.common.black,
      width: '100%',
      paddingBottom: '10px'
    }
  },
  navLink: {
    ...theme.typography.h6,
    fontWeight: 300,
    color: theme.palette.common.white,
    textDecoration: 'none',
    transition: theme.transitions.create('color', { duration: theme.transitions.duration.shorter }),
    '&.active': {
      color: theme.palette.primary.light,
      cursor: 'default'
    },
    '&:hover:not(.active)': {
      color: theme.palette.secondary.light
    },
    [SMALL_MEDIA_QUERY]: {
      lineHeight: '40px'
    },
    [LARGE_MEDIA_QUERY]: {
      lineHeight: '60px'
    }
  },
  navLinksWithMenuButton: {
    margin: '0 20px',
    width: '100%'
  },
  menuIconContainer: {
    display: 'flex',
    alignItems: 'center',
    [SMALL_MEDIA_QUERY]: {
      height: '45px'
    },
    [LARGE_MEDIA_QUERY]: {
      height: '60px'
    }
  },
  menuIcon: {
    color: theme.palette.common.white,
    cursor: 'pointer'
  }
}));
