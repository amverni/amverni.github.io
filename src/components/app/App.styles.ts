import { makeStyles } from '@mui/styles';

const FOOTER_HEIGHT = 248;

export default makeStyles({
  main: {
    minHeight: `calc(100vh - ${FOOTER_HEIGHT}px)`
    // todo, subtract out min heights of the header and footer
  }
});
