import React, { ChangeEventHandler, useState } from 'react';
import { css, setup } from 'goober';
import { MainBody } from './components/main-body';
import { Console } from './components/console';
import AppContainer from './components/app_container';
import { useBladeState } from '@/store/useBladeState';

setup(React.createElement);

const App: React.FC = () => {
  const {
    changeShapeIndex: changeBladeShape,
    changeColor: changeBladeColor,
  } = useBladeState();
  const [color, setColor] = useState<string>('#D8D8D8');

  const changeColor: ChangeEventHandler<HTMLInputElement> = (e) => {
    setColor(e.target.value);
    changeBladeColor(e.target.value);
  }
  return (
    <>
      <AppContainer>
        <MainBody color={color} />
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
          `}
        />
        <Console />
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
        onClick={changeBladeShape}
      >
        切换扇叶
      </button>
    </>
  );
}

export default App;
