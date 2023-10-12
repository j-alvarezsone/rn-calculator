import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import CalcButton from '../components/CalcButton';
import {styles} from '../theme/appTheme';

const OPERATORS = {
  PLUS: '+',
  MINUS: '-',
  MULTIPLY: '*',
  DIVIDE: '/',
} as const;

type ObjectValues<T> = T[keyof T];

const CalculatorScreen = () => {
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

  return (
    <View style={styles.calculatorContainer}>
      {prevNumber !== '0' && (
        <Text style={styles.smallResult}>{prevNumber}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      <View style={styles.row}>
        <CalcButton text="C" bgColor="#9B9B9B" action={clear} />
        <CalcButton text="+/-" bgColor="#9B9B9B" action={positiveNegative} />
        <CalcButton text="del" bgColor="#9B9B9B" action={btnDelete} />
        <CalcButton
          text="/"
          bgColor="#FF9427"
          action={() => btnOperation(OPERATORS.DIVIDE)}
        />
      </View>

      <View style={styles.row}>
        <CalcButton text="7" action={buildNumber} />
        <CalcButton text="8" action={buildNumber} />
        <CalcButton text="9" action={buildNumber} />
        <CalcButton
          text="X"
          action={() => btnOperation(OPERATORS.MULTIPLY)}
          bgColor="#FF9427"
        />
      </View>

      <View style={styles.row}>
        <CalcButton text="4" action={buildNumber} />
        <CalcButton text="5" action={buildNumber} />
        <CalcButton text="6" action={buildNumber} />
        <CalcButton
          text="-"
          bgColor="#FF9427"
          action={() => btnOperation(OPERATORS.MINUS)}
        />
      </View>

      <View style={styles.row}>
        <CalcButton text="1" action={buildNumber} />
        <CalcButton text="2" action={buildNumber} />
        <CalcButton text="3" action={buildNumber} />
        <CalcButton
          text="+"
          bgColor="#FF9427"
          action={() => btnOperation(OPERATORS.PLUS)}
        />
      </View>

      <View style={styles.row}>
        <CalcButton text="0" action={buildNumber} wide />
        <CalcButton text="." action={buildNumber} />
        <CalcButton text="=" bgColor="#FF9427" action={calculate} />
      </View>
    </View>
  );
};

export default CalculatorScreen;
