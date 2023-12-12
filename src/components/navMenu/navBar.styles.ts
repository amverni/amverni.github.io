import { makeStyles } from '@mui/styles';
import Theme from 'components/app/theme';

export const useStyles = makeStyles<typeof Theme>((theme) => ({
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
    ...theme.typography.h5,
    color: 'white',
    textDecoration: 'none',
    transition: 'color 0.2s ease-in-out',
    '&.active': {
      color: theme.palette.primary.light,
      cursor: 'default'
    },
    '&:hover:not(.active)': {
      color: theme.palette.secondary.light
    }
  }
}));
