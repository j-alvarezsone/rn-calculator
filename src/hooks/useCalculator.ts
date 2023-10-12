import {useRef, useState} from 'react';

const OPERATORS = {
  PLUS: '+',
  MINUS: '-',
  MULTIPLY: '*',
  DIVIDE: '/',
} as const;

type ObjectValues<T> = T[keyof T];

export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');

  const finalOperation = useRef('0');

  const clear = () => {
    setNumber('0');
    setPrevNumber('0');
  };

  const buildNumber = (numberText: string) => {
    if (number.includes('.') && numberText === '.') {
      return;
    }

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (numberText === '.') {
        setNumber(number + numberText);
      } else if (numberText === '0' && number.includes('.')) {
        setNumber(number + numberText);
      } else if (numberText !== '0' && !number.includes('.')) {
        setNumber(numberText);
      } else if (numberText === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + numberText);
      }
    } else {
      setNumber(number + numberText);
    }
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber(`-${number}`);
    }
  };

  const btnDelete = () => {
    let negative = '';
    let tempNumber = number;
    if (number.includes('-')) {
      negative = '-';
      tempNumber = number.substring(1);
    }

    if (tempNumber.length > 1) {
      setNumber(negative + tempNumber.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  const changeNumberForPrevious = () => {
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }
    setNumber('0');
  };

  const btnOperation = (operation: ObjectValues<typeof OPERATORS>) => {
    changeNumberForPrevious();
    finalOperation.current = operation;
  };

  const calculate = () => {
    const num1 = Number(number);
    const num2 = Number(prevNumber);

    if (num1 === 0 && num2 === 0) {
      return;
    }

    switch (finalOperation.current) {
      case OPERATORS.PLUS:
        setNumber(`${num1 + num2}`);
        break;
      case OPERATORS.MINUS:
        setNumber(`${num2 - num1}`);
        break;
      case OPERATORS.MULTIPLY:
        setNumber(`${num1 * num2}`);
        break;
      case OPERATORS.DIVIDE:
        setNumber(`${num2 / num1}`);
        break;
    }

    setPrevNumber('0');
  };

  return {
    number,
    prevNumber,
    clear,
    positiveNegative,
    btnDelete,
    btnOperation,
    buildNumber,
    calculate,
    OPERATORS,
  };
};
