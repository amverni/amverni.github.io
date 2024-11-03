import { makeStyles } from '@mui/styles';
import { AppTheme } from 'components/app/theme';

export const useStyles = makeStyles<AppTheme>((theme) => ({
  divider: {
    borderBottom: `1px solid ${theme.palette.grey[100]}`,
    width: '85%',
    margin: 'auto'
  }
}));
