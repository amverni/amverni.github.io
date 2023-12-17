import * as React from 'react';
import { SectionHeader } from './sectionHeader';
import { useStyles } from './section.styles';

interface SectionProps {
  title: string;
}

export const Section: React.FC<SectionProps> = ({ title, children }) => {
  const styles = useStyles();

  return (
    <div className={styles.section}>
      <SectionHeader title={title} />
      {children}
    </div>
  );
};
