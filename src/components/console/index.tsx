import React, { useRef, useState } from 'react';
import background from '../../assets/console.svg';
import { css, styled } from 'goober';

interface ConsoleProps {
  level: number;
  onLevelchange: (level: number) => void;
}

interface ButtonProps {
  active: boolean;
}

const Button = styled('div')<ButtonProps>`
  width: 20px;
  height: 20px;
  border: 1px solid #979797;
  border-radius: 8px 8px 0 0;
  background-color: #d8d8d8;
  transform: translateY(${(props) => (props.active ? 10 : 0)}px);
  transition: all 0.1s ease-in;
`;

let initialStatus: number[] = [];
for (let i = 0; i < 5; i++) initialStatus.push(i);

export const Console = ({ level = 0, onLevelchange }: ConsoleProps) => {
  const a = useRef<number[]>(initialStatus);

  const handleChange = (index: number) => {
    onLevelchange(index);
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
          {a.current.map((index) => (
            <Button
              active={index === level && index !== 0}
              onClick={() => handleChange(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
