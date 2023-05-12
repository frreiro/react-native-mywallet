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
        <Text style={styles.dateText}>{formatDate(transaction.date)}</Text>
        <Text style={styles.descriptioText}>{transaction.description}</Text>
      </View>
      <Text style={styles.amountText}>
        {convertIntoCurrencyValue(String(transaction.amount), true)}
      </Text>
    </View>
  );
}

export default TransactionsItem;
