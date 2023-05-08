import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useAppSelector} from '../../redux/hooks';
import {useTransaction} from '../../redux/hooks/useTransaction';
import {convertIntoCurrencyValue} from '../../utils/convertIntoCurrencyInput';

function TransactionsViewer() {
  const user = useAppSelector(state => state.user);
  const transactions = useAppSelector(state => state.transaction);

  const {getTransactions, getUserAmount} = useTransaction();

  useEffect(() => {
    (async () => {
      try {
        await getTransactions(user.id);
      } catch (e) {}
    })();
  }, [user.id, getTransactions]);

  console.log(getUserAmount(transactions));
  return (
    <View>
      <Text>Viewer aqui</Text>
      {transactions.map(transaction => {
        return <Text key={transaction.id}>{transaction.description}</Text>;
      })}
      <Text>
        {convertIntoCurrencyValue(String(getUserAmount(transactions)))}
      </Text>
    </View>
  );
}

export default TransactionsViewer;
