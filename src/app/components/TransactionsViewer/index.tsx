import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useAppSelector} from '../../../redux/hooks';
import {useTransaction} from '../../../redux/hooks/useTransaction';
import {convertIntoCurrencyValue} from '../../utils/convertIntoCurrencyInput';

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
      <Text>Viewer aqui</Text>
      {transactions.transactions.map(transaction => {
        return (
          <Text key={String(transaction._id)}>{transaction.description}</Text>
        );
      })}
      <Text>{convertIntoCurrencyValue(String(transactions.amount))}</Text>
    </View>
  );
}

export default TransactionsViewer;
