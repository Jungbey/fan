import React from 'react';
import { css } from 'goober';
import { useColorState } from '@/store/useColorState';

const Background: React.FC = () => {
  const backgroundColor = useColorState().consoleColor;
  return (
    <div
      className={css`
        width: 280px;
        height: 15px;
        margin: 0 auto;
        transform: translateY(-18px);
      `}
    >
      <svg
        width="280px"
        height="34px"
        viewBox="0 0 280 34"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Rectangle</title>
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="iPhone-8-Plus-Copy-3"
            transform="translate(-68.000000, -564.000000)"
            fill={backgroundColor}
            stroke="#979797"
          >
            <path
              d="M340,564.5 C342.071068,564.5 343.946068,565.339466 345.303301,566.696699 C346.660534,568.053932 347.5,569.928932 347.5,572 L347.5,572 L347.5,589.599401 C347.500002,591.670469 346.660536,593.54547 345.303303,594.902703 C343.94607,596.259937 342.071069,597.099404 340,597.099404 C339.611952,597.099404 339.224489,597.069288 338.841101,597.009327 C295.647827,590.253978 252.200793,586.876306 208.5,586.876306 C164.751939,586.876306 120.966968,590.26129 77.1450938,597.031339 C75.0983073,597.347548 73.1171209,596.804197 71.5685791,595.670098 C70.0200371,594.535998 68.9041396,592.811149 68.5879312,590.764362 C68.5293965,590.385473 68.5,590.002653 68.5,589.61927 L68.5,589.61927 L68.5,572 C68.5,569.928932 69.3394661,568.053932 70.6966991,566.696699 C72.0539322,565.339466 73.9289322,564.5 76,564.5 L76,564.5 Z"
              id="Rectangle"
            ></path>
          </g>
        </g>
      </svg>
    </div>
  );
};
export default Background;
