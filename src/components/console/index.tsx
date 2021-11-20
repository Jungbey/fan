import React from 'react';
import { css, styled, keyframes } from 'goober';
import { useBladeState } from '@/store/useBladeState';
import Background from './Background';

interface ButtonProps {
  active: boolean;
}
const translateY = keyframes`
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(10px);
    }
    100% {
      transform: translateY(0px);
    }
`;

const Button = styled('div')<ButtonProps>`
  width: 20px;
  height: 20px;
  border: 1px solid #979797;
  border-radius: 8px 8px 0 0;
  background-color: #d8d8d8;
  transform: translateY(${(props) => (props.active ? 10 : 0)}px);
  transition: all 0.1s ease-in;
`;

export const Console = () => {
  const { rotateLevel, changeLevel } = useBladeState();
  const handleChange = (index: number, event: React.MouseEvent) => {
    if (index === 0) {
      const target = event.currentTarget;
      target.setAttribute(
        'style',
        'animation:' + translateY.toString() + ' 0.2s linear'
      );
      setTimeout(() => target.removeAttribute('style'), 200);
    }
    changeLevel(index);
  };

  return (
    <div
      className={css`
        width: 280px;
        height: 35px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        flex-direction: column;
      `}
    >
      <div
        className={css`
          width: 132px;
          height: 20px;
          overflow: hidden;
          transform: translateY(-18px);
          align-self: center;
        `}
      >
        <div
          className={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          {new Array(5).fill(0).map((_, index) => (
            <Button
              active={index === rotateLevel && index !== 0}
              onClick={(event) => handleChange(index, event)}
            />
          ))}
        </div>
      </div>
      <Background />
    </div>
  );
};
