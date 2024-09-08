import * as React from 'react';
import MuiDialog, { type DialogProps as MuiDialogProps } from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/CloseRounded';
import { useStyles } from './dialog.styles';

interface DialogProps extends MuiDialogProps {
  title?: string;
}

export const Dialog: React.FC<DialogProps> = ({
  title, children, ...props
}) => {
  const styles = useStyles();

  const dialogTitle = title && (
    <DialogTitle>
      {title}
    </DialogTitle>
  );

  return (
    <MuiDialog {...props}>
      <div className={styles.header}>
        {dialogTitle}
        <DialogActions>
          <CloseIcon onClick={props.onClose as (() => void)} className={styles.closeButton} />
        </DialogActions>
      </div>
      <DialogContent>
        {children}
      </DialogContent>
    </MuiDialog>

  );
};
