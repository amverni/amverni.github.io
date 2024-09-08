import React from 'react';
import { useStyles } from './footer.styles';

export const Footer: React.FC = () => {
  const styles = useStyles();
  return (
    <div className={styles.footerContainer}>
      <p className={styles.footerContent}>
        <span>Copyright &copy; 2024</span>
        <span>
          Andrew M. Vernier
        </span>
      </p>
    </div>
  );
};
