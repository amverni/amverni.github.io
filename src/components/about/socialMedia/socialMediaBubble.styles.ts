import { makeStyles } from '@mui/styles';
import { AppTheme } from 'components/app/theme';

interface SocialMediaBubbleStyleProps {
  backgroundColor: string;
}

export const useStyles = makeStyles<AppTheme, SocialMediaBubbleStyleProps>((theme) => ({
  bubbleContainer: {
    height: '100px',
    width: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bubble: ({ backgroundColor }) => ({
    backgroundColor,
    borderRadius: '100px',
    width: '75%',
    height: '75%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      width: '100%',
      height: '100%'
    },
    transition: theme.transitions.create(['height', 'width'], { duration: theme.transitions.duration.shorter })
  }),
  logo: {
    height: '50%',
    width: '50%'
  }
}));
