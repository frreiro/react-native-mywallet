import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Transaction} from '../../../models/Transactions';
import {styles} from './styles';
import {formatDate} from '../../utils/formatDate';
import {convertIntoCurrencyValue} from '../../utils/convertIntoCurrencyInput';
import TransactionItemPainel from '../TransactionItemPainel';

function TransactionsItem({transaction}: {transaction: Transaction}) {
  const [isItemOptionVisible, setItemOptionVisible] = useState(false);

  useEffect(() => {
    if (isItemOptionVisible) {
      setTimeout(() => {
        setItemOptionVisible(false);
      }, 3000);
    }
  }, [isItemOptionVisible]);

  return (
    <>
      {isItemOptionVisible ? (
        <TransactionItemPainel transaction={transaction} />
      ) : (
        <></>
      )}
      {/*<TransactionItemPainel transaction={transaction} />*/}
      <TouchableOpacity
        style={styles.container}
        onLongPress={() => setItemOptionVisible(true)}>
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
      </TouchableOpacity>
    </>
  );
}

export default TransactionsItem;
