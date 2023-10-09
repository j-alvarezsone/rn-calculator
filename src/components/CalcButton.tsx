import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type Props = {
  text: string;
  bgColor?: string;
  wide?: boolean;
  action: (numberText: string) => void;
  // onPress: (numberText: string) => void;
};

const CalcButton = ({
  text,
  bgColor = '#2D2D2D',
  wide = false,
  action,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View style={styles(bgColor, wide).button}>
        <Text style={styles(bgColor).buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CalcButton;

const styles = (bgColor: string, wide?: boolean) =>
  StyleSheet.create({
    button: {
      height: 75,
      width: wide ? 174 : 75,
      backgroundColor: bgColor,
      borderRadius: 100,
      justifyContent: 'center',
      marginHorizontal: 12,
    },
    buttonText: {
      textAlign: 'center',
      padding: 10,
      fontSize: 30,
      color: bgColor === '#9B9B9B' ? 'black' : 'white',
      fontWeight: '300',
    },
  });
