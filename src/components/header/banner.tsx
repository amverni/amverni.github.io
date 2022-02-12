import React from 'react';
import Collage from './collage';
import Nameplate from './nameplate';

// interface Props {
// }

export default function Banner(): JSX.Element {
  // const image4 = "url('https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg')";

  return (
    <div
      className="banner"
      style={{
        background: 'rgba(0, 255, 255, .5)',
        position: 'absolute',
        width: '100vw',
        height: '100vh'
      }}
    >
      <Nameplate />
      <Collage transparency={80} />
    </div>
  );
}

/*
  NamePlate
    photos fade out fully at max of small size
    photos go on top of background photo.
      At small size (or throughout) have this fade into the colors?
*/
