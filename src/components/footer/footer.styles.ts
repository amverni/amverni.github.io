import { getPrimaryGradientColor, getSecondaryGradientColor, type AppTheme } from 'components/app/theme';
import { makeStyles } from '@mui/styles';

export const IS_SMALL_THRESHOLD = 550;
const SMALL_MEDIA_QUERY = `@media (max-width: ${IS_SMALL_THRESHOLD}px)`;
const LARGE_MEDIA_QUERY = `@media (min-width: ${IS_SMALL_THRESHOLD + 1}px)`;

export const useStyles = makeStyles<AppTheme>((theme) => ({
  footerContainer: {
    background: `linear-gradient(to right, ${getSecondaryGradientColor(theme)}, ${getPrimaryGradientColor(theme)})`,
    height: '48px',
    display: 'flex',
    alignItems: 'center'
  },
  footerContent: {
    display: 'flex',
    gap: '20px',
    color: theme.palette.common.white,
    margin: 0,
    justifyContent: 'center',
    width: '100%',
    [SMALL_MEDIA_QUERY]: {
      fontSize: '12px'
    },
    [LARGE_MEDIA_QUERY]: {
      fontSize: '14px'
    }
  }
}));
