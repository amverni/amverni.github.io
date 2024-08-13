import { makeStyles } from '@mui/styles';
import { AppTheme } from 'components/app/theme';

export const useStyles = makeStyles<AppTheme>((theme) => ({
  container: {
    display: 'flex',
    gap: '30px',
    flexWrap: 'wrap'
  },
  reverseContainer: {
    flexDirection: 'row-reverse'
  },
  infoContainer: {
    flex: 3,
    minWidth: '300px',
    margin: 'auto'
  },
  title: {
    ...theme.typography.h3
  },
  subtitle: {
    ...theme.typography.subtitle2
  },
  description: {
    ...theme.typography.body1,
    '& p': {
      marginBlock: '10px'
    }
  },
  skills: {
    ...theme.typography.body1,
    marginTop: '20px'
  },
  imageContainer: {
    flex: 1,
    margin: 'auto',
    minWidth: '100px'
  },
  clickableImage: {
    cursor: 'pointer'
  },
  image: {
    width: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: '10px'
  }
}));
