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
    <div
      className={classNames}
      ref={containerRef}
      onClick={() => isCollapsible && setIsCollapsed(!isCollapsed)}
      onKeyPress={(event) => (event.key === 'Enter') && setIsCollapsed(!isCollapsed)}
      role="button"
      aria-expanded={!isCollapsed}
      tabIndex={0}
    >
      {children}
    </div>
  );
};
