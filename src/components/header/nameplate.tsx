import React from 'react';

export default function Nameplate(): JSX.Element {
  return (
    <div
      className="nameplate"
      style={{
        backgroundColor: 'lightblue',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)'
      }}
    >
      <p>Andrew M. Vernier</p>
      <p>Software Engineer @ Microsoft</p>
    </div>
  );
}
