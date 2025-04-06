import { makeStyles } from '@mui/styles';
import { AppTheme, getShadowColor } from 'components/app/theme';

export const IS_SMALL_THRESHOLD = 530;
const LARGE_MEDIA_QUERY = `@media (min-width: ${IS_SMALL_THRESHOLD}px)`;

export const useStyles = makeStyles<AppTheme>((theme) => ({
  container: {
    display: 'flex',
    gap: '30px',
    flexWrap: 'wrap'
  },
  reverseContainer: {
    [LARGE_MEDIA_QUERY]: {
      flexDirection: 'row-reverse'
    }
  },
  infoContainer: {
    flex: 2,
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
    },
    '& h4': {
      ...theme.typography.h4,
      marginTop: '20px'
    }
  },
  skills: {
    ...theme.typography.body1,
    marginTop: '20px'
  },
  imageContainer: {
    flex: 1,
    margin: 'auto',
    minWidth: '200px',
    display: 'flex',
    justifyContent: 'center'
  },
  clickableImage: {
    cursor: 'pointer',
    '&:hover': {
      boxShadow: `-4px 4px 8px 0px ${getShadowColor()}`,
      transform: 'translate(2px, -2px)'
    },
    '&:active': {
      boxShadow: 'unset',
      transform: 'unset',
      filter: 'brightness(90%)'
    },
    transition: theme.transitions.create(['box-shadow', 'transform', 'filter'], { duration: theme.transitions.duration.shortest, delay: '50ms' })
  },
  image: {
    width: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: '10px'
  }
}));
