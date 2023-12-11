import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useStyles } from './navMenu.styles';

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
  {
    path: 'projects',
    title: 'Projects'
  },
  {
    path: 'publications',
    title: 'Publications'
  }
];

export const NavMenu: React.FC = () => {
  // const location = useLocation();
  const styles = useStyles();

  const navLinks = ROUTES.map((route) => (
    <NavLink to={route.path} className={styles.navLink}>{route.title}</NavLink>
  ));
  return (
    <nav className={styles.navContainer}>
      {navLinks}
    </nav>
  );
};
