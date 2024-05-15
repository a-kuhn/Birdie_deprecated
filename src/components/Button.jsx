import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import colors from '@constants/colors';

export default Button = ({onClick, title, isDisabled = false}) => {
  const buttonStyle = isDisabled ? styles.disabledButton : styles.button;
  return (
    <TouchableOpacity
      onPress={onClick}
      style={buttonStyle}
      disabled={isDisabled}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.blue,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: 'gray',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
