import { useState } from 'react';
import { divide, subtract , multiply , add} from '../math-operations.ts';
import { MathButton } from './MathButton.tsx';
import { MathInput } from './MathInput.tsx';
import { InputName } from '../enums.ts';
import type { MathInputsValues, MathOperation } from '../types.ts';




const MATH_OPERATIONS = [
  { value: '+', func: add },
  { value: '-', func: subtract },
  { value: '*', func: multiply },
  { value: '/', func: divide },
]

const App = () => {
  const [result, setResult] = useState<number>(0);

  const [inputValues, setInputValues] = useState<MathInputsValues>({
    first: 0,
    second: 0,
  });

  const updateState = (name: InputName, value: number) => {
    setInputValues((prev) => ({...prev, [name]: value}));
  }

  const handleMathOperation = (func: MathOperation) => {
    const first = inputValues[InputName.First];
    const second = inputValues[InputName.Second];
    setResult(func(first, second));
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <MathInput
          name={InputName.First}
          onChange={updateState}
          value={inputValues[InputName.First]}
        />
        <MathInput
          name={InputName.Second}
          onChange={updateState}
          value={inputValues[InputName.Second]}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
         {MATH_OPERATIONS.map(({ value, func }, index) => (
            <MathButton key={`${value}-${index}`} onClick={() => handleMathOperation(func)}>
              {value}
            </MathButton>
          ))}
      </div>
      <p>Result: {result}</p>
    </div>
  );
};

export default App;
