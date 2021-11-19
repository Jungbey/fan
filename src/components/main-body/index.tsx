import React from 'react';
import cover from '../../assets/cover.svg';
import blade from '../../assets/blade.svg';
import blade2 from '../../assets/blade_shape_2.svg';
import { css, keyframes } from 'goober';
import Blade from './Blade'
import Cover from './Cover'
interface Props {
  level: number;
  color: string;
  bladeflag: boolean;
}

export const MainBody = ({ level, color, bladeflag }: Props) => {
  return (
    <div className={css`
      width: 350px;
      height: 350px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    `}>
      <Cover fill={color} />
      <Blade fill={color} level={level} bladeflag={bladeflag}/>
    </div>
  )
}
