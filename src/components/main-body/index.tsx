import React from 'react';
import { css } from 'goober';
import Blade from './Blade'
import Cover from './Cover'

const MainBody = () => {
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
      <Cover />
      <Blade />
    </div>
  )
}


export { MainBody };
