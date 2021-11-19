import React from 'react';
import cover from '../../assets/cover.svg';
import blade from '../../assets/blade.svg';
import { css, keyframes } from 'goober';

interface Props {
  level: number;
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

export const MainBody = ({ level }: Props) => {
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
      <img
        src={cover}
        alt="cover"
        className={css`
          width: 100%;
          height: 100%;
        `}
       />
      <img
        src={blade}
        alt="blade"
        className={css`
          position: absolute;
          z-index: -1;
          animation: ${rotate} ${level ? .006/level : 0}s linear infinite;
        `}
      />
    </div>
  )
}
