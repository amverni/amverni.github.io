import * as React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { NavBar } from 'components/navMenu/navBar';
import { Header } from 'components/header/header';
import { About } from 'components/about/about';
import { Experiences } from 'components/experiences';
import RootErrorBoundary from 'components/RootErrorBoundary';
import { Footer } from '../footer/footer';
import { useStyles } from './app.styles';
import { appTheme } from './theme';

export const App: React.FC = () => {
  const location = useLocation();
  const styles = useStyles();

  return (
    <ThemeProvider theme={appTheme}>
      <RootErrorBoundary>
        <Header isDynamic={location.pathname === '/'} />
        <NavBar />
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
