import * as React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ThemeProvider } from '@mui/material/styles';
import { About } from '../about';
import { Experiences } from '../experiences';
import RootErrorBoundary from '../RootErrorBoundary';
import { Header } from '../header';
import { Footer } from '../footer';
import useStyles from './App.styles';
import theme from './theme';

export const App: React.FC = () => {
  const location = useLocation();
  const styles = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <RootErrorBoundary>
        <ParallaxProvider>
          <Header forceMinimize={location.pathname === 'About'} />
          <div className={styles.main}>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="experiences" element={<Experiences />} />
            </Routes>
          </div>
          <Footer />
        </ParallaxProvider>
      </RootErrorBoundary>
    </ThemeProvider>
  );
};
