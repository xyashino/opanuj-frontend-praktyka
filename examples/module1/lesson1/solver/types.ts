import { InputName } from './enums.ts';

export type MathOperation = (a: number, b: number) => number;
export interface MathInputsValues {
  [InputName.First]: number;
  [InputName.Second]: number;
}