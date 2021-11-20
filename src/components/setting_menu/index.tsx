import React from 'react';
import { css } from 'goober';
import { useBladeState, useColorState } from '@/store';
import ColorEditor from './ColorEditor';

const SettingMenu = () => {
  const changeBladeShape = useBladeState().changeShapeIndex;
  const {
    bladeColor,
    coverColor,
    coverCenterColor,
    coverBorderColor,
    bridgeColor,
    consoleColor,
    consoleBtnColors,
    setBladeColor,
    setCoverColor,
    setCoverCenterColor,
    setCoverBorderColor,
    setBridgeColor,
    setConsoleColor,
    setConsoleBtnColors
  } = useColorState();

  return (
    <div
      className={css`
        width: 180px;
        padding: 15px;
        background-color: #BCBFC2AA;
        position: fixed;
        right: 10px;
        bottom: 10px;
        z-index: 20;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      `}
    >
      <ColorEditor color={bladeColor} onColorChange={setBladeColor} name="扇叶" />
      <ColorEditor color={coverColor} onColorChange={setCoverColor} name="遮罩" />
      <ColorEditor color={coverBorderColor} onColorChange={setCoverBorderColor} name="遮罩边框" />
      <ColorEditor color={coverCenterColor} onColorChange={setCoverCenterColor} name="中心" />
      <ColorEditor color={bridgeColor} onColorChange={setBridgeColor} name="连接器" />
      <ColorEditor color={consoleColor} onColorChange={setConsoleColor} name="中控" />
      <button onClick={changeBladeShape} >
        切换扇叶
      </button>
    </div>
  )
}

export default SettingMenu;
