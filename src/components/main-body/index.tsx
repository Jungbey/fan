import React, { useState } from 'react';
import cover from '../../assets/cover.svg';
import bladeShape_1 from '../../assets/blade_shape_1.svg';
import bladeShape_2 from '../../assets/blade_shape_2.svg';
import bladeShape_3 from '../../assets/blade_shape_3.svg';
import { css, keyframes } from 'goober';
import Blade from './Blade'
import Cover from './Cover'

interface Props {
  level: number;
  color: string;
  bladeflag: boolean;
}

const BLADES = [bladeShape_1, bladeShape_2, bladeShape_3];

const MainBody = ({ level, color, bladeflag }: Props) => {

  const [shapeIndex, setShapeIndex] = useState<number>(1);
  const changeBladeShape = () => {
    setShapeIndex((shapeIndex + 1) % BLADES.length);
  };

  return (
    <div
      className={css`
          width: 350px;
          height: 350px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        `}
      onClick={changeBladeShape}
    >
      <Cover fill={color} />
      <Blade fill={color} level={level} bladeflag={bladeflag} />

    </div>
  )
}


export { MainBody };
