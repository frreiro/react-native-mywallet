import React from 'react';
import {TextInput, TextInputProps} from 'react-native';
import {styles} from './styles';

export type CustomInputType = {
  inputOption?: TextInputProps;
};

function CustomInput({inputOption}: CustomInputType): JSX.Element {
  return <TextInput {...inputOption} style={styles.input} />;
}

export default CustomInput;
