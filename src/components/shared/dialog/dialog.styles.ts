import { makeStyles } from '@mui/styles';
import { AppTheme } from 'components/app/theme';
import { blueGrey } from '@mui/material/colors';

export const useStyles = makeStyles<AppTheme>({
  title: {
    padding: 0
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  actions: {
    padding: '0 24px'
  },
  closeButton: {
    cursor: 'pointer',
    color: blueGrey[900]
  }
});
