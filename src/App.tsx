import React, { useState } from 'react';
import { css, setup } from 'goober';
import { MainBody } from './components/main-body';
import { Console } from './components/console';
import AppContainer from './components/app_container';

setup(React.createElement);

const App: React.FC = () => {
  const [currentLevel, setCurrentLevel] = useState<number>(0);

  return (
    <AppContainer>
      <MainBody level={currentLevel} />
      <div
        className={css`
          width: 26px;
          height: 252px;
          border: 1px solid #979797;
          background-color: #d8d8d8;
          margin: 0 auto;
          position: absolute;
          bottom: 35px;
          z-index: -2;
        `}
      />
      <Console level={currentLevel} onLevelchange={setCurrentLevel} />
    </AppContainer>
  );
};

export default App;
