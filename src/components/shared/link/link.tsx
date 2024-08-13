import * as React from 'react';
import MuiLink from '@mui/material/Link';
import { useStyles } from './link.styles';

export const Link: React.FC = ({ children }) => {
  const styles = useStyles();
  return (
    <MuiLink
      classes={{ root: styles.link }}
      color={(theme) => theme.palette.primary.dark}
      underline="none"
    >
      {children}
    </MuiLink>
  );
};
