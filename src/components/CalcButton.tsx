import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type Props = {
  text: string;
  color?: string;
  wide?: boolean;
  action?: boolean;
  // onPress: (numberText: string) => void;
};

const CalcButton = ({text, color = '#2D2D2D', wide = false}: Props) => {
  const textColor = () => {
    return color === '#9B9B9B' ? 'black' : 'white';
  };

  const buttonWidth = () => {
    return wide ? 174 : 75;
  };

  return (
    <TouchableOpacity>
      <View
        style={{
          ...styles.button,
          backgroundColor: color,
          width: buttonWidth(),
        }}>
        <Text
          style={{
            ...styles.buttonText,
            color: textColor(),
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CalcButton;

const styles = StyleSheet.create({
  button: {
    height: 75,
    width: 75,
    backgroundColor: '#2D2D2D',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 12,
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: '300',
  },
});
