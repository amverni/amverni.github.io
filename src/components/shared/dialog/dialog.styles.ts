import { makeStyles } from '@mui/styles';
import { AppTheme } from 'components/app/theme';
import { blueGrey } from '@mui/material/colors';

export const useStyles = makeStyles<AppTheme>({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    boxShadow: '0px 0px 8px gray'
  },
  closeButton: {
    cursor: 'pointer',
    color: blueGrey[900]
  }
});
