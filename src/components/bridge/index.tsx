import React from 'react';
import { css } from 'goober';
import { useColorState } from '@/store';

const Bridge = () => {
  const bridgeColor = useColorState().bridgeColor;
  return (
    <div
      className={css`
        width: 26px;
        height: 252px;
        border: 1px solid ${bridgeColor};
        background-color: ${bridgeColor};
        margin: 0 auto;
        position: absolute;
        bottom: 35px;
        z-index: -2;
      `}
    />
  )
}

export default Bridge;
