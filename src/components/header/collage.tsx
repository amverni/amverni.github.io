import React from 'react';
import styled from 'styled-components';
import Polaroid from './polaroid';

interface Props {
  transparency: number
}

interface CollageContainerProps {
  transparency: number;
}

const CollageContainer = styled.div`
  background-color: green;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  height: 100%;
  opacity: ${(props: Props): number => props.transparency}%;
`;

export default function Collage(props: Props): JSX.Element {
  const { transparency } = props;

  return (
    <CollageContainer transparency={transparency}>
      <Polaroid />
      <Polaroid />
      <Polaroid />
      <Polaroid />
      <Polaroid />
      <Polaroid />
      <Polaroid />
      <Polaroid />
      <Polaroid />
      <Polaroid />
      <Polaroid />
      <Polaroid />
      <Polaroid />
      <Polaroid />
      <Polaroid />
    </CollageContainer>
  );
}
