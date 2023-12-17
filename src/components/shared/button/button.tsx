import * as React from 'react';
import MuiButton from '@mui/material/Button';
import type { ButtonProps } from '@mui/material/Button';

export const Button: React.FC<ButtonProps> = (linkProps) => (
  <MuiButton {...linkProps} variant="contained" />
);
