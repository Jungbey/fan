import React, { FC } from 'react';
import { css } from 'goober';

interface Props {
  name: string;
  color: string;
  onColorChange: (color: string) => void;
}

const ColorEditor: FC<Props> = ({ name, color, onColorChange }) => {
  return (
    <div
      className={css`
        width: 100%;
        margin: 12px 0;
        display: flex;
        justify-content: space-between;
      `}
    >
      {name}颜色：
      <input
        type="color"
        onChange={(e) => onColorChange(e.target.value)}
        value={color}
      />
    </div>
  );
}

export default ColorEditor;
