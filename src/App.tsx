import React from 'react';
import { setup } from 'goober';
import { MainBody } from './components/main-body';
import { Console } from './components/console';
import AppContainer from './components/app_container';
import Bridge from './components/bridge';
import SettingMenu from './components/setting_menu';
import VoicePlayer from '@/components/voice_player';

setup(React.createElement);

const App: React.FC = () => (
  <>
    <AppContainer>
      <MainBody />
      <Bridge />
      <Console />
    </AppContainer>
    <VoicePlayer />
    <SettingMenu />
  </>
);

export default App;
