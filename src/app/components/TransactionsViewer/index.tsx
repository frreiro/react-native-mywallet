import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useAppSelector} from '../../../redux/hooks';
import {useTransaction} from '../../../redux/hooks/useTransaction';
import {convertIntoCurrencyValue} from '../../utils/convertIntoCurrencyInput';
import TransactionsItem from '../TransactionItem';
import {styles} from './styles';

function TransactionsViewer() {
  const user = useAppSelector(state => state.user);
  const transactions = useAppSelector(state => state.transaction);

  const {getTransactions} = useTransaction();
  useEffect(() => {
    (async () => {
      try {
        await getTransactions(user._id);
      } catch (e) {
        console.log(e);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user._id]);
  console.log(transactions.transactions);
  return (
    <View style={styles.container}>
      <FlatList
        data={transactions.transactions}
        renderItem={({item}) => <TransactionsItem transaction={item} />}
        keyExtractor={item => String(item._id)}
      />
      <View style={styles.result}>
        <Text style={styles.result_text}>SALDO</Text>
        <Text
          style={
            transactions.amount >= 0
              ? {...styles.result_amount, ...styles.type_in}
              : {...styles.result_amount, ...styles.type_out}
          }>
          {convertIntoCurrencyValue(String(transactions.amount), {
            showValueOnZero: true,
          })}
        </Text>
      </View>
    </View>
  );
}

export default TransactionsViewer;
