import React, { ChangeEventHandler, useState } from 'react';
import { css, setup } from 'goober';
import { MainBody } from './components/main-body';
import { Console } from './components/console';
import AppContainer from './components/app_container';
import { useBladeState, useColorState } from '@/store';

setup(React.createElement);

const App: React.FC = () => {
  const {
    changeShapeIndex: changeBladeShape,
  } = useBladeState();
  const changeBladeColor = useColorState().setBladeColor;

  const changeColor: ChangeEventHandler<HTMLInputElement> = (e) => {

    changeBladeColor(e.target.value);
  }
  return (
    <>
      <AppContainer>
        <MainBody />
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
