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
  },
  emailIconContainer: {
    /* make size of larger icon (on hover) so other text doesn't move. */
    width: '20px',
    height: '24px',

    /* center icon so it grows from center */
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    transition: theme.transitions.create('font-size', { duration: theme.transitions.duration.shortest }),
    fontSize: '16px',
    '&:hover': {
      fontSize: '20px'
    }
  },
  emailIcon: {
    color: theme.palette.common.white
  }
}));
