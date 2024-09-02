import type { AppTheme } from 'components/app/theme';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles<AppTheme>((theme) => ({
  footerContainer: {
    background: `linear-gradient(to right, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
    height: '48px',
    display: 'flex',
    alignItems: 'center'
  },
  footerContent: {
    display: 'flex',
    gap: '20px',
    color: theme.palette.common.white,
    fontSize: '14px',
    margin: 0,
    justifyContent: 'center',
    width: '100%'
  }
}));
