import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/MenuRounded';
import CloseIcon from '@mui/icons-material/CloseRounded';
import { IS_SMALL_THRESHOLD, useStyles } from './navBar.styles';

type RouteInfo = {
  path: string;
  title: string;
}

const ROUTES: RouteInfo[] = [
  {
    path: '/',
    title: 'Home'
  },
  {
    path: 'experiences',
    title: 'Experiences'
  },
  // {
  //   path: 'projects',
  //   title: 'Projects'
  // },
  {
    path: 'publications',
    title: 'Publications'
  }
];

export const NavBar: React.FC = () => {
  const styles = useStyles();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isCollapsibleExperience = useMediaQuery(`(max-width: ${IS_SMALL_THRESHOLD}px)`);
  useEffect(() => {
    if (!isCollapsibleExperience && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isCollapsibleExperience]);

  const onNavLinkClick = (): void => {
    window.scrollTo(0, 0);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const navLinks = (
    <nav className={styles.navLinksContainer}>
      {ROUTES.map((route) => (
        <NavLink
          onClick={onNavLinkClick}
          to={route.path}
          className={styles.navLink}
          key={route.path}
        >
          {route.title}
        </NavLink>
      ))}
    </nav>
  );

  const menuIcon = isMenuOpen ? (
    <CloseIcon className={styles.menuIcon} onClick={() => setIsMenuOpen(false)} />
  ) : (
    <MenuIcon className={styles.menuIcon} onClick={() => setIsMenuOpen(true)} />
  );

  const navLinksWithMenuButton = (
    <div className={styles.navLinksWithMenuButton}>
      <div className={styles.menuIconContainer}>
        {menuIcon}
      </div>
      {isMenuOpen && navLinks}
    </div>
  );

  const content = isCollapsibleExperience ? navLinksWithMenuButton : navLinks;

  return (
    <div className={styles.navBarContainer}>
      {content}
    </div>
  );
};
