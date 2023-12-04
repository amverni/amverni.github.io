import { TypingEffect } from 'components/shared/typingEffect';
import React, {
  useCallback, useEffect, useRef, useState
} from 'react';
// import { Parallax } from 'react-parallax';
import higgins from 'assets/img/higgins.jpg';
import { useStyles } from './header.styles';

const SCROLL_DEBOUNCE_DELAY = 10;

interface HeaderProps {
  forceMinimize: boolean;
}

export const Header: React.FC<HeaderProps> = ({ forceMinimize }:HeaderProps) => {
  const container = useRef<HTMLDivElement>(null);
  const headerContent = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  // const [isUpdateScrollValueEnabled, setIsUpdateScrollValueEnabled] = useState(true);
  const styles = useStyles({ scrollY, contentHeight: headerContent.current?.clientHeight || 0 });

  // // console.log('val', isUpdateScrollValueEnabled);
  // const scrollHandler = useCallback(() => {
  //   // console.log('new func', isUpdateScrollValueEnabled);
  //   let timeout: NodeJS.Timeout | undefined;
  //   if (isUpdateScrollValueEnabled) {
  //     setScrollY(window.scrollY);
  //     setIsUpdateScrollValueEnabled(false);
  //     timeout = setTimeout(() => {
  //       setIsUpdateScrollValueEnabled(true);
  //       // console.log('resetting');
  //     }, SCROLL_DEBOUNCE_DELAY);
  //   //   console.log('setting');
  //   // } else {
  //   //   console.log('skipping');
  //   }
  //   return () => timeout && clearTimeout(timeout);
  //   // todo: use state and another useeffect to clean up the timer
  // }, [isUpdateScrollValueEnabled]);

  // useEffect(() => {
  //   // let cleanup: () => void;
  //   // window.addEventListener('scroll', () => {
  //   //   cleanup = scrollHandler();
  //   // });
  //   // return () => cleanup && cleanup();
  //   window.addEventListener('scroll', scrollHandler);
  //   return () => window.removeEventListener('scroll', scrollHandler);
  // }, [scrollHandler]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollY(window.scrollY);
    });
  });

  return (
    <div className={styles.headerContainer} ref={container}>
      <div className={styles.backgroundImage} />
      <div className={styles.backgroundImageFilter} />
      <div className={styles.headerContent} ref={headerContent}>
        <TypingEffect text="Andrew M. Vernier" as="h1" className={styles.title} />
        <h2 className={styles.subtitle}>
          Sports Enthusiast | Adventurer | Software Engineer
        </h2>
      </div>
      {/* background photo with filter on it */}
      {/* Collapse on scroll */}
    </div>
  );

  // const headerContent2 = (
  //   <>
  //     <TypingEffect text="Andrew M. Vernier" as="h1" className={styles.title} />
  //     <h2 className={styles.subtitle}>
  //       Sports Enthusiast | Adventurer | Software Engineer
  //     </h2>
  //     {/* background photo with filter on it */ }
  //     {/* Collapse on scroll */ }
  //   </>
  // );

  // return (
  //   <Parallax
  //     renderLayer={(percentage):JSX.Element => {
  //       console.log(percentage);
  //       const startingHeight = 50;
  //       const x: number = startingHeight * (2 - percentage);
  //       return (
  //         <div
  //           className={styles.headerContainer}
  //           ref={container}
  //           style={{
  //             height: `${x}vh`,
  //             paddingTop: `calc(20px + ${startingHeight - x}vh)`,
  //             minHeight: '232px'
  //           }}
  //         >
  //           {headerContent2}
  //         </div>
  //       );
  //     }}
  //   />
  // );
};
