import React from 'react';
import EmailIcon from '@mui/icons-material/EmailRounded';
import { useStyles } from './footer.styles';

export const Footer: React.FC = () => {
  const styles = useStyles();
  return (
    <div className={styles.footerContainer}>
      <p className={styles.footerContent}>
        <span>Copyright &copy; 2023</span>
        <span>
          Andrew M. Vernier
        </span>
        <span className={styles.emailIconContainer}>
          <a href="mailto:amverni@umich.edu">
            <EmailIcon className={styles.emailIcon} fontSize="inherit" />
          </a>
        </span>
      </p>
    </div>
  );
};
