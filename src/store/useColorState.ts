import create from 'zustand';
import { combine } from 'zustand/middleware';

export const useColorState = create(
  combine(
    {
      bladeColor: "#D8D8D8",
      coverColor: "#ADADAD",
      coverCenterColor: "#9A9A9A",
      bridgeColor: "#D8D8D8",
      consoleColor: "#D8D8D8",
      consoleBtnColors: ["#D8D8D8", "#D8D8D8", "#D8D8D8", "#D8D8D8", "#D8D8D8"],
    },
    (set) => ({
      setBladeColor: (color: string) => {
        set({
          bladeColor: color,
        });
      },
      setCoverColor: (color: string) => {
        set({
          coverColor: color,
        });
      },
      setCoverCenterColor: (color: string) => {
        set({
          coverCenterColor: color,
        });
      },
      setBridgeColor: (color: string) => {
        set({
          bridgeColor: color,
        });
      },
      setConsoleColor: (color: string) => {
        set({
          consoleColor: color,
        });
      },
      setConsoleBtnColors: (color: string, index: number) => {
        set((state) => {
          const newState = {
            ...state,
            consoleBtnColors: [...state.consoleBtnColors],
          };
          newState.consoleBtnColors[index] = color;
          return newState;
        });
      },
    })
  ),
)