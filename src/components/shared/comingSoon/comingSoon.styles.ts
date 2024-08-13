import { makeStyles } from '@mui/styles';
import { AppTheme } from 'components/app/theme';

export const useStyles = makeStyles<AppTheme>((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    gap: '25px'
  },
  text: {
    ...theme.typography.h2
  }
}));
