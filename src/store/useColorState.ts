import create from 'zustand';
import { combine } from 'zustand/middleware';

export const useColorState = create(
  combine(
    {
      bladeColor: "#FDF0D5",
      coverColor: "#DEF3FB",
      coverCenterColor: "#FDE0B2",
      coverBorderColor: "#F5F4F2",
      bridgeColor: "#DFE0DE",
      consoleColor: "#DFE0DE",
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
      setCoverBorderColor: (color: string) => {
        set({
          coverBorderColor: color,
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