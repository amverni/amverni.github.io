import { makeStyles } from '@mui/styles';
import { AppTheme } from 'components/app/theme';

export const useStyles = makeStyles<AppTheme>((theme) => ({
  link: {
    cursor: 'pointer',
    '&:hover': {
      color: `${theme.palette.secondary.dark}`
    }
  }
}));
