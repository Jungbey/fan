import React, { useState } from 'react'
import { css, keyframes } from 'goober';
import BladeShapes from './BladeShapes';

interface Props {
  fill: string;
  stroke?: string;
  level: number;
  bladeflag: boolean;
}

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

const Blade: React.FC<Props> = ({ fill = '#D8D8D8', stroke = '#979797', level }) => {
  const [shapeIndex, setShapeIndex] = useState<number>(0);

  const renderBlade = () => {
    const InnerBlade = BladeShapes[shapeIndex];
    return (
      <InnerBlade {...{ fill, stroke }} />
    )
  }
  return (
    <div
      className={css`
        animation: ${rotate} ${level ? .055 / level : 0}s linear infinite;
      `}
    >
      {renderBlade()}
    </div>
  )
}

export default Blade