import * as React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { NavMenu } from 'components/navMenu/navMenu';
import { Header } from 'components/header/header';
import { About } from '../about';
import { Experiences } from '../experiences';
import RootErrorBoundary from '../RootErrorBoundary';
import { Footer } from '../footer/footer';
import useStyles from './app.styles';
import theme from './theme';

export const App: React.FC = () => {
  const location = useLocation();
  const styles = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <RootErrorBoundary>
        <Header isDynamic={location.pathname === '/'} />
        <NavMenu />
        <div className={styles.main}>
          <Routes>
            <Route path="" element={<About />} />
            <Route path="experiences" element={<Experiences />} />
            <Route path="projects" />
            <Route path="publications" />
          </Routes>
        </div>
        <Footer />
      </RootErrorBoundary>
    </ThemeProvider>
  );
};
