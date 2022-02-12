import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import About from './components/about';
import Experiences from './components/experiences';
import RootErrorBoundary from './components/RootErrorBoundary';
import Header from './components/header';
import Footer from './components/footer';

export default function App():JSX.Element {
  return (
    <div className="App">
      <RootErrorBoundary>
        <ParallaxProvider>
          <Header />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="experiences" element={<Experiences />} />
          </Routes>
          <Footer />
        </ParallaxProvider>
      </RootErrorBoundary>
    </div>
  );
}
