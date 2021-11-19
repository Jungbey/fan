import create from 'zustand';
import { combine } from 'zustand/middleware';
import BladeShapes from '@/components/main-body/Blade/BladeShapes';

export const useBladeState = create(
  combine(
    {
      shapeIndex: 0,
      // 扇叶边框颜色及填充色
      stroke: "#979797",
      fill: "#D8D8D8",
      rotateLevel: 0
    },
    (set) => ({
      changeShapeIndex: () => {
        set(state => ({
          shapeIndex: (state.shapeIndex + 1) % BladeShapes.length,
        }));
      },
      changeColor: (color: string) => {
        set({
          stroke: color,
          fill: color,
        });
      },
      shutDown: () => {
        set({
          rotateLevel: 0,
        });
      },
      changeLevel: (level: number) => {
        set({
          rotateLevel: level,
        });
      },
    })
  ),
)