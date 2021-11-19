import create from 'zustand';
import { combine } from 'zustand/middleware';

export const useColorState = create(
  combine(
    {
      bladeColor: "#D8D8D8",
      coverColor: "#D8D8D8",
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