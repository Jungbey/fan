import React, { useRef, useEffect } from 'react';
import bladeVoice_1 from '@/assets/voice/1.wav';
import bladeVoice_2 from '@/assets/voice/2.wav';
import bladeVoice_3 from '@/assets/voice/3.wav';
import bladeVoice_4 from '@/assets/voice/4.wav';
import { useBladeState } from '@/store';

const VOICES = [bladeVoice_1, bladeVoice_2, bladeVoice_3, bladeVoice_4];

const VoicePlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const level = useBladeState().rotateLevel;

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      if (level !== 0) {
        audio.src = VOICES[level - 1];
        audio.play();
      } else {
        audio.pause();
      }
    }
  }, [level]);

  return (
    <>
      <audio ref={audioRef} loop />
    </>
  )
}

export default VoicePlayer;
