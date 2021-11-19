import React from 'react';
import background from '../../assets/console.svg';
import { css, styled } from 'goober';
import { useBladeState } from '@/store/useBladeState';

interface ButtonProps {
  active: boolean;
}

const Button = styled('div') <ButtonProps>`
  width: 20px;
  height: 20px;
  border: 1px solid #979797;
  border-radius: 8px 8px 0 0;
  background-color: #d8d8d8;
  transform: translateY(${(props) => (props.active ? 10 : 0)}px);
  transition: all 0.1s ease-in;
`;

export const Console = () => {
  const {
    rotateLevel,
    changeLevel
  } = useBladeState();

  const handleChange = (index: number) => {
    changeLevel(index);
  };

  return (
    <div
      className={css`
        width: 280px;
        height: 35px;
        margin: 0 auto;
        background: url(${background}) center / 280px 35px no-repeat;
        display: flex;
        justify-content: center;
      `}
    >
      <div
        className={css`
          width: 132px;
          height: 20px;
          overflow: hidden;
          transform: translateY(-18px);
        `}
      >
        <div
          className={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          {
            new Array(5).fill(0).map((_, index) => (
              <Button
                active={index === rotateLevel && index !== 0}
                onClick={() => handleChange(index)}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};
