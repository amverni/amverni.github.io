import React from 'react';
import { NavLink } from 'react-router-dom';
import { useStyles } from './navBar.styles';

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

export const NavBar: React.FC = () => {
  const styles = useStyles();

  const navLinks = ROUTES.map((route) => (
    <NavLink to={route.path} className={styles.navLink} key={route.path}>{route.title}</NavLink>
  ));
  return (
    <nav className={styles.navContainer}>
      {navLinks}
    </nav>
  );
};
