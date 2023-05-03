import React from 'react';
import {TextInput, TextInputProps, Text} from 'react-native';
import {styles} from './styles';

export type CustomInputType = {
  inputOption?: TextInputProps;
  errorMessage?: string;
};

function CustomInput({
  inputOption,
  errorMessage,
}: CustomInputType): JSX.Element {
  return (
    <>
      <TextInput {...inputOption} style={styles.input} />
      {errorMessage && (
        <Text style={{fontSize: 10, color: 'red'}}>{errorMessage}</Text>
      )}
    </>
  );
}

export default CustomInput;
