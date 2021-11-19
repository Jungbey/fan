import React from 'react'
import { css, keyframes } from 'goober';
import BladeShapes from './BladeShapes';
import { useBladeState } from '@/store/useBladeState';

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
  const { shapeIndex, stroke, fill, rotateLevel } = useBladeState();

  const renderBlade = () => {
    const InnerBlade = BladeShapes[shapeIndex];
    return (
      <InnerBlade {...{ fill, stroke }} />
    )
  }
  return (
    <div
      className={css`
        animation: ${rotate} ${rotateLevel ? .055 / rotateLevel : 0}s linear infinite;
      `}
    >
      {renderBlade()}
    </div>
  )
}

export default Blade