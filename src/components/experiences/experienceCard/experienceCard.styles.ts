import type { AppTheme } from 'components/app/theme';
import { makeStyles } from '@mui/styles';

interface ExperienceCardStylesProps {
  imagePosition: 'left' | 'right';
}

export const useStyles = makeStyles<AppTheme, ExperienceCardStylesProps>((theme) => ({
  experienceCardContainer: ({ imagePosition }) => ({
    display: 'flex',
    gap: '20px',
    flexDirection: imagePosition === 'right' ? 'row-reverse' : undefined
  }),
  image: {
    width: '100%'
  },
  imageContainer: {
    flexGrow: 0,
    flexBasis: '33%',
    margin: 'auto'
  },
  details: {
    flexGrow: 0,
    flexBasis: '67%',
    display: 'flex',
    flexDirection: 'column',
    gap: '2px'
  },
  title: {
    ...theme.typography.h4
  },
  subtitle: {
    ...theme.typography.h5
  },
  description: {
    ...theme.typography.body2
  }
}));
