import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {styles} from './styles';

export interface ISubmmitButton {
  onPress: () => void;
  disabled: boolean;
  title: string;
}

function SubmitButton(props: ISubmmitButton): JSX.Element {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={props.onPress}
      disabled={props.disabled}>
      <Text style={styles.button_text}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default SubmitButton;
