import React from 'react';
import andrew from 'assets/img/andrew.jpg';
import styled from 'styled-components';

/* picture dimensions: 3.0625 * 3.125, 3.4 * 4.2 */
/* picture dimensions: 3.1 * 3.1, 3.5 * 4.2 */

/* Dimensions in inches. */
const frameDimension = {
  width: 3.5,
  height: 4.1
};
const imgDimensions = {
  width: 3.2,
  height: 3.2
};
const sideBorderWidth = (frameDimension.width - imgDimensions.width) / 2;
const topBorderWidth = sideBorderWidth;
const bottomBorderWidth = (frameDimension.height - topBorderWidth - imgDimensions.height);

const size = 250; /* pixels */
const aspectRation = frameDimension.height / frameDimension.width;
const scale = 0.05;

const PolaroidContainer = styled.div`
  width: ${size}px;
  height: ${size * aspectRation}px;
  margin: ${scale / 2 * size}px;
`;

const PolaroidFrame = styled.div`
  background: white;
  display: inline-flex;
  padding-top: ${100 * topBorderWidth / frameDimension.width}%;
  padding-left: ${100 * sideBorderWidth / frameDimension.width}%;
  padding-right: ${100 * sideBorderWidth / frameDimension.width}%;
  padding-bottom: ${100 * bottomBorderWidth / frameDimension.width}%;
  -webkit-box-shadow: 0 4px 6px rgba(0, 0, 0, .3);
  -moz-box-shadow: 0 4px 6px rgba(0, 0, 0, .3);
  box-shadow: 0 4px 6px rgba(0, 0, 0, .3);
  -webkit-transition: all .20s linear;
  -moz-transition: all .20s linear;
  transition: all .20s linear;
  z-index: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  &:after {
    color: #333;
    font-size: 25px;
    content: attr(title);
    position: relative;
    top: 15px;
  }
  &:hover {
    -webkit-transform: scale(${1 + scale});
    -moz-transform: scale(${1 + scale});
    transform: scale(${1 + scale});
    z-index: 10;
    -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, .7);
    -moz-box-shadow: 0 10px 20px rgba(0, 0, 0, .7);
    box-shadow: 0 10px 20px rgba(0, 0, 0, .7);
  }
`;

const PolaroidImage = styled.img`
  width: 100%;
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  object-fit: cover;
`;

export default function Polaroid(): JSX.Element {
  return (
    <PolaroidContainer>
      <PolaroidFrame>
        <PolaroidImage src={andrew} />
      </PolaroidFrame>
    </PolaroidContainer>
  );
}

/**
 * On hover: bring to top, rotate?, highlight somehow?
 * Shadow?
 */
