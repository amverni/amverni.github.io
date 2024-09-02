import { makeStyles } from '@mui/styles';
import { AppTheme } from 'components/app/theme';

export const useStyles = makeStyles<AppTheme>((theme) => ({
  container: {
    display: 'flex',
    gap: '30px',
    flexWrap: 'wrap'
  },
  thumbnailLink: {
    flex: '0 1 200px',
    border: 'solid 0.5px gray',
    borderRadius: '4px',
    overflow: 'hidden',
    '&:hover': {
      boxShadow: '-4px 4px 8px 0px gray',
      transform: 'translate(2px, -2px)'
    },
    '&:active': {
      boxShadow: 'unset',
      transform: 'unset',
      filter: 'brightness(90%)'
    }
  },
  thumbnail: {
    width: '100%',
    maxWidth: '100%'
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
