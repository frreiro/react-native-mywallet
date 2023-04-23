import React from 'react';
import {TextInput} from 'react-native';
import {styles} from './styles';

export type CustomInputType<T> = {
  placeholder: string;
  state: T;
  setState: React.Dispatch<React.SetStateAction<T>>;
  name: keyof T;
};

function CustomInput<K extends Record<any, string | undefined>>({
  placeholder,
  state,
  setState,
  name,
}: CustomInputType<K>): JSX.Element {
  const changeState = (text: string) => {
    const newState = {...state};
    newState[name] = text as K[keyof K];
    setState(newState);
  };

  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={state[name] ? state[name] : undefined}
      onChangeText={changeState}
    />
  );
}

export default CustomInput;
