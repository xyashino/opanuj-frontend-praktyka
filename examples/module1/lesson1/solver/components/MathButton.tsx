import { type ComponentPropsWithoutRef } from 'react';

interface MathButtonProps extends ComponentPropsWithoutRef<"button">{}
export const MathButton = ({className, children, ...rest}: MathButtonProps) => {
  return (
    <button
      className={`bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};