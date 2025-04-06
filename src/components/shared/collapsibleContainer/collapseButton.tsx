import { ExpandLessRounded, ExpandMoreRounded } from '@mui/icons-material';
import React from 'react';
import { useCollapsibleContainerContext } from './collapsibleContainerContext';

/**
 * This must be used as a child component of a CollapsibleContainer.
 */
export const CollapseButton: React.FC = () => {
  const {
    isCollapsible,
    isCollapsed,
    setIsCollapsed
  } = useCollapsibleContainerContext();

  switch (true) {
  case !isCollapsible:
    return null;

  case isCollapsed:
    return <ExpandMoreRounded onClick={() => setIsCollapsed(false)} />;

  default:
    return <ExpandLessRounded onClick={() => setIsCollapsed(true)} />;
  }
};
