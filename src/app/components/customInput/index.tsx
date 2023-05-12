import React from 'react';
import {TextInput, TextInputProps, Text, View} from 'react-native';
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
    <View style={styles.container}>
      {errorMessage && <Text style={styles.text_error}>*{errorMessage}</Text>}
      <TextInput
        {...inputOption}
        style={
          !errorMessage
            ? styles.input
            : {...styles.input, ...styles.input_error}
        }
      />
    </View>
  );
}

export default CustomInput;
