import * as React from 'react';
import { useStyles } from './sectionsContainer.styles';

export const SectionsContainer: React.FC = ({ children }) => {
  const styles = useStyles();

  return (
    <div className={styles.sectionsContainer}>
      {children}
    </div>
  );
};
