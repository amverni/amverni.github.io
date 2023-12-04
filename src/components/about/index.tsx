import React from 'react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => (
  <>
    <main>
      <h2>Who are we?</h2>
      <p>That feels like an existential question, don&apos;t you think?</p>
    </main>
    <nav>
      <Link to="/experiences">Experiences</Link>
    </nav>
  </>
);
