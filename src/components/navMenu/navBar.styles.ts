import { makeStyles } from '@mui/styles';
import { type AppTheme } from 'components/app/theme';

export const useStyles = makeStyles<AppTheme>((theme) => ({
  navContainer: {
    display: 'flex',
    gap: '20px',
    backgroundColor: 'black',
    justifyContent: 'center',
    height: '60px',
    alignItems: 'center',
    position: 'sticky',
    top: 0
  },
  navLink: {
    ...theme.typography.h4,
    color: theme.palette.common.white,
    textDecoration: 'none',
    transition: theme.transitions.create('color', { duration: theme.transitions.duration.shorter }),
    '&.active': {
      color: theme.palette.primary.light,
      cursor: 'default'
    },
    '&:hover:not(.active)': {
      color: theme.palette.secondary.light
    }
  }
}));
