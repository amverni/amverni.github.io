import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  appContainer: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  main: {
    width: '90%',
    margin: '20px auto',
    flexGrow: 1
  }
});
