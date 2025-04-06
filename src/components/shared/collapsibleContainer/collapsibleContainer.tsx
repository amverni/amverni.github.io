import React, { useEffect, useRef, useState } from 'react';
import { useStyles } from './collapsibleContainer.styles';

interface CollapsibleContainerContentProps {
  className?: string;
  collapsedHeight: number;
}

export const CollapsibleContainer: React.FC<CollapsibleContainerContentProps> = ({
  className,
  collapsedHeight,
  children
}) => {
  const styles = useStyles({ collapsedHeight });
  const [isCollapsible, setIsCollapsible] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
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
