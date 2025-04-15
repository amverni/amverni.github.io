import { makeStyles } from '@mui/styles';
import { AppTheme, getShadowColor } from 'components/app/theme';
import { grey } from '@mui/material/colors';

export const useStyles = makeStyles<AppTheme>((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    boxShadow: `0px 0px 8px ${getShadowColor()}`
  },
  closeButton: {
    cursor: 'pointer',
    color: theme.palette.mode === 'dark' ? grey[100] : grey[900]
  }
}));
