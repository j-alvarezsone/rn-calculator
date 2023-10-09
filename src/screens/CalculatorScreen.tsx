import React from 'react';
import {Text, View} from 'react-native';
import CalcButton from '../components/CalcButton';
import {styles} from '../theme/appTheme';

const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.smallResult}>1,500.00</Text>
      <Text style={styles.result}>1,500.00</Text>

      <View style={styles.row}>
        <CalcButton text="C" color="#9B9B9B" />
        <CalcButton text="+/-" color="#9B9B9B" />
        <CalcButton text="del" color="#9B9B9B" />
        <CalcButton text="/" color="#FF9427" />
      </View>

      <View style={styles.row}>
        <CalcButton text="7" />
        <CalcButton text="8" />
        <CalcButton text="9" />
        <CalcButton text="X" color="#FF9427" />
      </View>

      <View style={styles.row}>
        <CalcButton text="4" />
        <CalcButton text="5" />
        <CalcButton text="6" />
        <CalcButton text="-" color="#FF9427" />
      </View>

      <View style={styles.row}>
        <CalcButton text="1" />
        <CalcButton text="2" />
        <CalcButton text="3" />
        <CalcButton text="+" color="#FF9427" />
      </View>

      <View style={styles.row}>
        <CalcButton text="0" wide />
        <CalcButton text="." />
        <CalcButton text="/" color="#FF9427" />
      </View>
    </View>
  );
};

export default CalculatorScreen;
