import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {GlobalStyles} from '../../../styles/GlobalStyles';

export interface IHeader {
  onPress?: () => void;
  title: string;
}

export const Header = (props: IHeader): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      {props.onPress && (
        <TouchableOpacity style={styles.button_icon} onPress={props.onPress}>
          <Icon
            name="log-out-outline"
            size={35}
            color={GlobalStyles.colors.light}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
