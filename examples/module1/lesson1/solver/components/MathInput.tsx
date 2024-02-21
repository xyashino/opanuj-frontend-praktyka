import { type ComponentPropsWithoutRef } from 'react';
import { InputName } from '../enums.ts';



interface InputProps<T extends InputName> extends Omit<ComponentPropsWithoutRef<"input">, "type" | "onChange">{
  name: T;
  onChange: (name:T, value: number) => void;
}
export const MathInput = <T extends InputName>({className, children, onChange ,name, ...rest}: InputProps<T>) => {
  return (
    <input
      type="number"
      className="rounded-md shadow-md p-4"
      onChange={({ target }) => onChange(name, target.valueAsNumber)}
      {...rest}
    />
  );
};