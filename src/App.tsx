import React, { ChangeEventHandler, useState } from 'react';
import { css, setup } from 'goober';
import { MainBody } from './components/main-body';
import { Console } from './components/console';
import AppContainer from './components/app_container';
import Bridge from './components/bridge';
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
        <Bridge />
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
