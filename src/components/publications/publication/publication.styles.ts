import { makeStyles } from '@mui/styles';
import { AppTheme } from 'components/app/theme';

const GAP = 30;
const THUMBNAIL_WIDTH = 200;
const DETAILS_WIDTH = 300;

const IS_SMALL_THRESHOLD = THUMBNAIL_WIDTH + GAP + DETAILS_WIDTH;
const SMALL_MEDIA_QUERY = `@container (max-width: ${IS_SMALL_THRESHOLD}px)`;
const LARGE_MEDIA_QUERY = `@container (min-width: ${IS_SMALL_THRESHOLD}px)`;

export const useStyles = makeStyles<AppTheme>((theme) => ({
  wrapper: {
    containerType: 'inline-size'
  },
  container: {
    display: 'flex',
    gap: '30px',
    flexWrap: 'wrap',
    [SMALL_MEDIA_QUERY]: {
      justifyContent: 'center'
    }
  },
  thumbnailLink: {
    border: 'solid 0.5px gray',
    borderRadius: '4px',
    overflow: 'hidden',
    height: '100%',
    margin: 'auto',
    '&:hover': {
      boxShadow: '-4px 4px 8px 0px gray',
      transform: 'translate(2px, -2px)'
    },
    '&:active': {
      boxShadow: 'unset',
      transform: 'unset',
      filter: 'brightness(90%)'
    },
    [LARGE_MEDIA_QUERY]: {
      flex: '0 1 200px'
    }
  },
  thumbnail: {
    width: '200px'
  },
  details: {
    flex: '1 1 300px'
  },
  title: {
    ...theme.typography.h3,
    color: undefined
  },
  subtitle: {
    ...theme.typography.subtitle2
  },
  abstract: {
    ...theme.typography.body1
  }
}));
