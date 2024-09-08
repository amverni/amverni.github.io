import { makeStyles } from '@mui/styles';
import { AppTheme } from 'components/app/theme';

export const IS_SMALL_THRESHOLD = 800;
const SMALL_MEDIA_QUERY = `@media (max-width: ${IS_SMALL_THRESHOLD}px)`;
const LARGE_MEDIA_QUERY = `@media (min-width: ${IS_SMALL_THRESHOLD + 1}px)`;

export const useStyles = makeStyles<AppTheme>((theme) => ({
  contactForm: {
    display: 'grid',
    gap: '10px',
    [LARGE_MEDIA_QUERY]: {
      gridTemplateAreas: `
        "name email"
        "subject subject"
        "message message"
        "submit submit"
      `
    },
    [SMALL_MEDIA_QUERY]: {
      gridTemplateAreas: `
        "name"
        "email"
        "subject"
        "message"
        "submit"
      `
    }
  },
  name: {
    gridArea: 'name'
  },
  email: {
    gridArea: 'email'
  },
  subject: {
    gridArea: 'subject'
  },
  message: {
    gridArea: 'message'
  },
  actionOrInfoContainer: {
    ...theme.typography.body1,
    gridArea: 'submit',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    height: '41px' /* Height of the button */
  },
  successMessage: {
    color: theme.palette.success.main
  },
  errorMessage: {
    color: theme.palette.error.main
  }
}));
