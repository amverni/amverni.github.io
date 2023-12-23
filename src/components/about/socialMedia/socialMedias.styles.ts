import { makeStyles } from '@mui/styles';
import { AppTheme } from 'components/app/theme';

export const useStyles = makeStyles<AppTheme>((theme) => ({
  socialMediaContainer: {
    display: 'flex',
    justifyContent: 'center'
  }
}));
