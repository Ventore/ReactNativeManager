import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 18,
    fontWeight: '600',
    padding: 10,
  },
  buttonStyle: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
  },
};

export { Button };
