import React from 'react';
import { Link } from 'react-router-dom';

export default function Experiences(): JSX.Element {
  return (
    <>
      <main>
        <h2>Welcome to my Experiences!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/">About</Link>
      </nav>
    </>
  );
}
