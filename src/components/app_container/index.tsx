import React, { FC } from 'react';
import { css } from 'goober';

const Conainer: FC = ({ children }) => (
  <div className={css`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`}>
    <div
      className={css`
        height: 462px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        position: relative;
      `}
    >
      {children}
    </div>
  </div>
)

export default Conainer;
