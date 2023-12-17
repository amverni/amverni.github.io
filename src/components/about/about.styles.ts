import { makeStyles } from '@mui/styles';
import { AppTheme } from 'components/app/theme';

export const useStyles = makeStyles<AppTheme>((theme) => ({
  aboutContainer: {
    display: 'flex',
    gap: '30px'
  },
  aboutColumn: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    justifyContent: 'center',
    alignItems: 'center'
  },
  portrait: {
    maxWidth: '100%',
    borderRadius: '20px'
  },
  bio: {
    ...theme.typography.body1
  }
}));
