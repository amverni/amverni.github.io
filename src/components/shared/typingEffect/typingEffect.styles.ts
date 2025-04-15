import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  cursorHidden: {
    visibility: 'hidden'
  },
  cursor: {
    width: 0,
    display: 'inline-block',
    position: 'relative',
    left: '-10px'
  }
});
