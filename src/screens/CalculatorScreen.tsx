import React from 'react';
import {Text, View} from 'react-native';
import CalcButton from '../components/CalcButton';
import {useCalculator} from '../hooks/useCalculator';
import {styles} from '../theme/appTheme';

const CalculatorScreen = () => {
  const {
    number,
    prevNumber,
    clear,
    positiveNegative,
    calculate,
    buildNumber,
    btnOperation,
    btnDelete,
    OPERATORS,
  } = useCalculator();

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
