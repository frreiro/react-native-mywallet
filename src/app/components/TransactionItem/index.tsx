import React from 'react';
import {Text, View} from 'react-native';
import {Transaction} from '../../../models/Transactions';
import {styles} from './styles';
import {formatDate} from '../../utils/formatDate';
import {convertIntoCurrencyValue} from '../../utils/convertIntoCurrencyInput';

function TransactionsItem({transaction}: {transaction: Transaction}) {
  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <Text style={styles.date_text}>{formatDate(transaction.date)}</Text>
        <Text style={styles.descriptio_text}>{transaction.description}</Text>
      </View>
      <Text
        style={
          transaction.type === 'in'
            ? {...styles.amount_text, ...styles.type_in}
            : {...styles.amount_text, ...styles.type_out}
        }>
        {convertIntoCurrencyValue(String(transaction.amount), {
          showCurrencySign: true,
        })}
      </Text>
    </View>
  );
}

export default TransactionsItem;
