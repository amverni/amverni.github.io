import { makeStyles } from '@mui/styles';
import { getPrimaryGradientColor, getSecondaryGradientColor, type AppTheme } from 'components/app/theme';

export const useStyles = makeStyles<AppTheme>((theme) => ({
  sectionTitle: {
    ...theme.typography.h2,
    borderBottom: 'solid 5px',
    borderImageSlice: 1,
    borderImageSource: `linear-gradient(to right, ${getSecondaryGradientColor(theme)}, ${getPrimaryGradientColor(theme)})`,
    width: 'fit-content',
    margin: 'auto',
    paddingBottom: '10px'
  }
}));
