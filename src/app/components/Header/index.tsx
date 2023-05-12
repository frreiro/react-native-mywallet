import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';

export interface IHeader {
  onPress?: () => void;
  title: string;
}

export const Header = (props: IHeader): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      {props.onPress && (
        <TouchableOpacity
          style={{backgroundColor: 'red'}}
          onPress={props.onPress}>
          <Text>Sair da conta</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
