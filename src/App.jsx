import React, { useState } from 'react';
import { css, setup } from 'goober';
import { MainBody } from './components/main-body';
import { Console } from './components/console';

setup(React.createElement);

function App() {
  const [currentLevel, setCurrentLevel] = useState(0);

  return (
    <div className={css`
      min-width: 100vw;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    `}>
      <div className={css`
        height: 462px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        position: relative;
      `}>
        <MainBody level={currentLevel} />
        <div
          className={css`
            width: 26px;
            height: 252px;
            border: 1px solid #979797;
            background-color: #D8D8D8;
            margin: 0 auto;
            position: absolute;
            bottom: 35px;
            z-index: -2;
        `}/>
        <Console level={currentLevel} onLevelchange={setCurrentLevel} />
      </div>
    </div>
  );
}

export default App;
