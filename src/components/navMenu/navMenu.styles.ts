import { makeStyles } from '@mui/styles';
import Theme from 'components/app/theme';

export const useStyles = makeStyles<typeof Theme>((theme) => ({
  navContainer: {
    display: 'flex',
    gap: '20px',
    backgroundColor: 'black',
    justifyContent: 'center'
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    '&.active': {
      color: theme.palette.primary.light,
      cursor: 'default'
    },
    '&:hover:not(.active)': {
      color: theme.palette.secondary.light
    }
  }
}));
