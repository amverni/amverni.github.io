import * as React from 'react';
import { useStyles } from './underConstruction.styles';

interface UnderConstructionProps {
  itemName: string
}

export const UnderConstruction: React.FC<UnderConstructionProps> = ({
  itemName
}) => {
  const styles = useStyles();

  return (
    // todo: add construction icon
    <p>
      Sorry for the inconvenience, the
      {itemName}
      is still under construction.
    </p>
  );
};
