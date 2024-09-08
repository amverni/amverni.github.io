import { TypingEffect } from 'components/shared/typingEffect/typingEffect';
import React, { useEffect, useRef, useState } from 'react';
import { useStyles } from './header.styles';

interface HeaderProps {
  isDynamic: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isDynamic }:HeaderProps) => {
  const container = useRef<HTMLDivElement>(null);
  const headerContent = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const styles = useStyles({
    scrollY,
    contentHeight: headerContent.current?.clientHeight || 0,
    isDynamic
  });

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollY(window.scrollY);
    });
  }, []);

  return (
    <div className={styles.headerContainer} ref={container}>
      {isDynamic && (
        <>
          <div className={styles.backgroundImage} />
          <div className={styles.backgroundImageFilter} />
        </>
      )}
      <div className={styles.headerContent} ref={headerContent}>
        <TypingEffect text="Andrew M. Vernier" as="h1" classes={{ root: styles.title }} />
        <p className={styles.subtitle}>
          <span className={styles.descriptor}>Sports Enthusiast</span>
          |
          <span className={styles.descriptor}>Adventurer</span>
          |
          <span className={styles.descriptor}>Software Engineer</span>
        </p>
      </div>
    </div>
  );
};
