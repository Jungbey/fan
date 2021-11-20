import React from 'react'
import { css, keyframes } from 'goober';
import BladeShapes from './BladeShapes';
import { useBladeState, useColorState } from '@/store';

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }

    50% {
        transform: rotate(-180deg);
    }

    100% {
      transform: rotate(-360deg);
    }
`;

const Blade: React.FC = () => {
  const { shapeIndex, rotateLevel } = useBladeState();
  const bladeColor = useColorState().bladeColor;

  const renderBlade = () => {
    const InnerBlade = BladeShapes[shapeIndex];
    return (
      <InnerBlade fill={bladeColor} stroke={bladeColor} />
    )
  }
  return (
    <div
      className={css`
        animation: ${rotate} ${rotateLevel ? .45 / rotateLevel : 0}s linear infinite;
      `}
    >
      {renderBlade()}
    </div>
  )
}

export default Blade