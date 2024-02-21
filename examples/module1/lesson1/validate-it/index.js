// utils.js
export const listenOnClick = (element, callback) => {
  element.addEventListener('click', callback);
}

// validation.js
const isEven = (value) => value % 2 === 0;
const isInRange = (value, min, max) => value >= min && value <= max;
const validateByRules = (value, rules = []) => rules.every((rule) => rule(value));

// index.js
const handleClickOnValidationButton = (inputElement, resultElement) => {
  const valueAsNumber = Number(inputElement.value);

  const INVALID_MESSAGE = 'Invalid';
  const VALID_MESSAGE = 'Valid';

  if (isNaN(valueAsNumber)) {
    resultElement.innerHTML = INVALID_MESSAGE;
    return;
  }

  const rules = [isEven, (value) => isInRange(value, 30, 50)];
  const isValid = validateByRules(valueAsNumber, rules);

  resultElement.innerHTML = isValid ? VALID_MESSAGE : INVALID_MESSAGE;
};

const handleClickOnClearButton= (inputElement, resultElement) => {
  inputElement.value = '';
  resultElement.innerHTML = '';
};

const validator = () => {
  const [input , validateButton, clearButton , result] = ['input', 'validateButton', 'clearButton', 'result'].map((id) => document.getElementById(id));
  listenOnClick(validateButton, () => handleClickOnValidationButton(input, result));
  listenOnClick(clearButton, () => handleClickOnClearButton(input, result));
};

validator();
