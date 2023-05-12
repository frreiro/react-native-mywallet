import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {GlobalStyles} from '../../../styles/GlobalStyles';
import {useTransaction} from '../../../redux/hooks/useTransaction';
import {Transaction} from '../../../models/Transactions';

function TransactionItemPainel({
  transaction,
  setIsEditing,
}: {
  transaction: Transaction;
  setIsEditing: () => void;
}) {
  const {removeTransaction} = useTransaction();

  const handleRemoveTransaction = async () => {
    try {
      await removeTransaction(transaction);
    } catch (e) {}
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleRemoveTransaction}>
        <Icon name="trash" size={20} color={GlobalStyles.colors.dark} />
      </TouchableOpacity>
      <TouchableOpacity onPress={setIsEditing}>
        <Icon name="pencil" size={20} color={GlobalStyles.colors.dark} />
      </TouchableOpacity>
    </View>
  );
}

export default TransactionItemPainel;
