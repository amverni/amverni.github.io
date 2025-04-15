import { makeStyles } from '@mui/styles';
import { AppTheme } from './theme';

export const useStyles = makeStyles<AppTheme>((theme) => ({
  appContainer: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  mainContent: {
    width: '90%',
    margin: '20px auto'
  },
  main: {
    flexGrow: 1,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.common.black : theme.palette.common.white
  }
}));
