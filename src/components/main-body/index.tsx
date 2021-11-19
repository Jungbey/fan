import React from 'react';
import { css } from 'goober';
import Blade from './Blade'
import Cover from './Cover'

interface Props {
  color: string;
}

const MainBody = ({ color }: Props) => {

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
    >
      <Cover fill={color} />
      <Blade />
    </div>
  )
}


export { MainBody };
