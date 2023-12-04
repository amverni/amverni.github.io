import React from 'react';
import { Parallax } from 'react-parallax';
import { Routes, Route } from 'react-router-dom';
import Banner from './banner';

export default function Header(): JSX.Element {
  return (
    <>
      <Parallax
        renderLayer={(percentage):JSX.Element => {
          console.log(percentage);
          const x: number = 100 * (2 - percentage);
          return (
            <div
              style={{
                width: '100vw',
                height: `${x}vh`
              }}
            >
              <Routes>
                <Route path="/" element={<Banner />} />
                <Route path="*" element={<Banner />} />
              </Routes>
            </div>
          );
        }}
      />
      {/* NavBar */}
      <div>
        <p>Hello world!</p>
        <p>Hello world!</p>
        <p>Hello world!</p>
        <p>Hello world!</p>
        <p>Hello world!</p>
        <p>Hello world!</p>
        <p>Hello world!</p>
        <p>Hello world!</p>
        <p>Hello world!</p>
        <p>Hello world!</p>
        <p>Hello world!</p>
        <p>Hello world!</p>
        <p>Hello world!</p>
        <p>Hello world!</p>
        <p>Hello world!</p>
        <p>Hello world!</p>
        <p>Hello world!</p>
        <p>Hello world!</p>
        <p>Hello world!</p>
        <p>Hello world!</p>
      </div>
    </>
  );
}
