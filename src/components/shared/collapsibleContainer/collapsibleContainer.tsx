import React, { useEffect, useRef, useState } from 'react';
import { CollapsibleContainerContextProvider, useCollapsibleContainerContext } from './collapsibleContainerContext';
import { useStyles } from './collapsibleContainer.styles';
import { CollapseButton } from './collapseButton';

interface CollapsibleContainerContentProps {
  className?: string;
  collapsedHeight: number;
}

const CollapsibleContainerContent: React.FC<CollapsibleContainerContentProps> = ({
  className,
  collapsedHeight,
  children
}) => {
  const styles = useStyles({ collapsedHeight });
  const {
    setIsCollapsible,
    setIsCollapsed,
    isCollapsed,
    isCollapsible
  } = useCollapsibleContainerContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const contentHeight = containerRef.current?.clientHeight;
  useEffect(() => {
    if (contentHeight && contentHeight > collapsedHeight && !isCollapsible) {
      setIsCollapsible(true);
      setIsCollapsed(true);
    }
  }, [contentHeight]);

  const classNames = isCollapsed ? `${className} ${styles.collapsed}` : className;

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={classNames}
      ref={containerRef}
      onClick={() => isCollapsible && setIsCollapsed(!isCollapsed)}
      onKeyPress={() => setIsCollapsed(!isCollapsed)}
      // role=""
    >
      {children}
    </div>
  );
};

interface CollapsibleContainerProps extends CollapsibleContainerContentProps {
  isCollapsible?: boolean;
}

export const CollapsibleContainer: React.FC<CollapsibleContainerProps> = (props) => (
  <CollapsibleContainerContextProvider>
    <CollapsibleContainerContent {...props} />
  </CollapsibleContainerContextProvider>
);
