import * as React from 'react';
import { TextInput } from 'react-native-paper';

const OutlinedInput = (props) => {
  return (
    <TextInput
      mode='outlined'
      label={props.label}
      placeholder={props.placeholder}
      placeholderTextColor='white'
      secureTextEntry={props.secureTextEntry}
      multiline={props.multiline}
      keyboardType={props.keyboardType}
      value={props.value}
      onChangeText={(value) => props.onChangeText(value)}
      style={props.style}
      theme={props.theme}
    />
  );
};

export default OutlinedInput;