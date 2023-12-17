import { makeStyles } from '@mui/styles';
import { type AppTheme } from 'components/app/theme';

export const useStyles = makeStyles<AppTheme>((theme) => ({
  sectionTitle: {
    ...theme.typography.h2,
    borderBottom: 'solid 5px',
    borderImageSlice: 1,
    borderImageSource: `linear-gradient(to right, ${theme.palette.secondary.light}, ${theme.palette.primary.light})`,
    width: 'fit-content',
    margin: 'auto',
    paddingBottom: '10px'
  }
}));
