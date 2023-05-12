import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useAppSelector} from '../../../redux/hooks';
import {useTransaction} from '../../../redux/hooks/useTransaction';
import {convertIntoCurrencyValue} from '../../utils/convertIntoCurrencyInput';
import TransactionsItem from '../TransactionItem';

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

  return (
    <View>
      <FlatList
        data={transactions.transactions}
        renderItem={({item}) => <TransactionsItem transaction={item} />}
        keyExtractor={item => String(item._id)}
      />
      <Text>{convertIntoCurrencyValue(String(transactions.amount))}</Text>
    </View>
  );
}

export default TransactionsViewer;
