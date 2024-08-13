import React from 'react';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ConstructionIcon from '@mui/icons-material/Construction';
import { useStyles } from './comingSoon.styles';

interface ComingSoonProps {
  name: string;
}

export const ComingSoon: React.FC<ComingSoonProps> = ({ name }) => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <EngineeringIcon color="warning" fontSize="large" />
      <h2 className={styles.text}>
        {name}
        {' '}
        is coming soon.
      </h2>
      <ConstructionIcon color="warning" fontSize="large" />
    </div>
  );
};
