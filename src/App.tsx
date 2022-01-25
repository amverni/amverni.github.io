import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './about';
import Experiences from './experiences';

export default function App():JSX.Element {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="experiences" element={<Experiences />} />
      </Routes>
    </div>
  );
}
