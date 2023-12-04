import React from 'react';
import { Link } from 'react-router-dom';

export const Experiences: React.FC = () => (
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
