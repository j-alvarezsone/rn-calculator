import React, {useState} from 'react';
import {Text, View} from 'react-native';
import CalcButton from '../components/CalcButton';
import {styles} from '../theme/appTheme';

const CalculatorScreen = () => {
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');

  const clear = () => {
    setNumber('0');
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

  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.smallResult}>{prevNumber}</Text>
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      <View style={styles.row}>
        <CalcButton text="C" bgColor="#9B9B9B" action={clear} />
        <CalcButton text="+/-" bgColor="#9B9B9B" action={positiveNegative} />
        <CalcButton text="del" bgColor="#9B9B9B" action={clear} />
        <CalcButton text="/" bgColor="#FF9427" action={clear} />
      </View>

      <View style={styles.row}>
        <CalcButton text="7" action={buildNumber} />
        <CalcButton text="8" action={buildNumber} />
        <CalcButton text="9" action={buildNumber} />
        <CalcButton text="X" action={buildNumber} bgColor="#FF9427" />
      </View>

      <View style={styles.row}>
        <CalcButton text="4" action={buildNumber} />
        <CalcButton text="5" action={buildNumber} />
        <CalcButton text="6" action={buildNumber} />
        <CalcButton text="-" bgColor="#FF9427" action={clear} />
      </View>

      <View style={styles.row}>
        <CalcButton text="1" action={buildNumber} />
        <CalcButton text="2" action={buildNumber} />
        <CalcButton text="3" action={buildNumber} />
        <CalcButton text="+" bgColor="#FF9427" action={clear} />
      </View>

      <View style={styles.row}>
        <CalcButton text="0" action={buildNumber} wide />
        <CalcButton text="." action={buildNumber} />
        <CalcButton text="/" bgColor="#FF9427" action={clear} />
      </View>
    </View>
  );
};

export default CalculatorScreen;
