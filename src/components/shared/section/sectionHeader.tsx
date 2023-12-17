import * as React from 'react';
import { useStyles } from './sectionHeader.styles';

interface SectionHeaderProps {
  title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  const styles = useStyles();

  return (
    <h2 className={styles.sectionTitle}>{title}</h2>
  );
};
