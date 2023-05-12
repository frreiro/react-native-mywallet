import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {styles} from './styles';
import {TransactionType} from '../../../models/Transactions';
import {GlobalStyles} from '../../../styles/GlobalStyles';

export interface ITransactionButton {
  onPress: () => void;
  type: TransactionType;
}

function TransactionButton(props: ITransactionButton): JSX.Element {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Icon
        name={
          props.type === 'in' ? 'add-circle-outline' : 'remove-circle-outline'
        }
        size={30}
        color={GlobalStyles.colors.light}
      />
      <View>
        <Text style={styles.button_text}>Nova</Text>
        <Text style={styles.button_text}>
          {props.type === 'in' ? 'entrada' : 'saída'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default TransactionButton;
