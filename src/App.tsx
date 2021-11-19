import React, { ChangeEventHandler, useState } from 'react';
import { css, setup } from 'goober';
import { MainBody } from './components/main-body';
import { Console } from './components/console';
import AppContainer from './components/app_container';

setup(React.createElement);

const App: React.FC = () => {
  const [currentLevel, setCurrentLevel] = useState<number>(0);
  const [color, setColor] = useState<string>('#D8D8D8')
  const [changeBladeFlag, setChangeBladeFlag] = useState<boolean>(true)
  const changeColor: ChangeEventHandler<HTMLInputElement> = (e) => {
    setColor(e.target.value)
  }
  return (
    <>
      <AppContainer>
        <MainBody level={currentLevel} color={color} bladeflag={changeBladeFlag} />
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
        `} />
        <Console level={currentLevel} onLevelchange={setCurrentLevel} />
      </AppContainer>
      <input type="color"
        id="color"
        className={css`
        position: fixed;
        right: 80px;
        bottom: 80px;
      `}
        onChange={changeColor} />
      <button
        className={css`
          position: fixed;
          right: 80px;
          bottom: 120px;
        `}
        onClick={() => { setChangeBladeFlag(!changeBladeFlag) }}
      >
        切换扇叶
      </button>
    </>
  );
}

export default App;
