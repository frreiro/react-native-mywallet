import React, {useEffect, useRef, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Transaction} from '../../../models/Transactions';
import {styles} from './styles';
import {formatDate} from '../../utils/formatDate';
import {convertIntoCurrencyValue} from '../../utils/convertIntoCurrencyInput';
import TransactionItemPainel from '../TransactionItemPainel';
import {useTransaction} from '../../../redux/hooks/useTransaction';

function TransactionsItem({transaction}: {transaction: Transaction}) {
  const [isItemOptionVisible, setItemOptionVisible] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [editValue, setEditValue] = useState(transaction.description);
  const inputRef = useRef<TextInput | null>(null);

  const {updateTransaction} = useTransaction();

  const handleEdit = () => {
    setIsEditingDescription(true);
    setItemOptionVisible(true);
    setTimeout(() => inputRef.current?.focus(), 0); //TImeout necessário pois naõ dava tempo do ref reconhcer o componente
  };

  const handleLongPress = () => {
    setItemOptionVisible(true);
    handleEdit();
  };

  const handleFinishEditing = () => {
    setIsEditingDescription(false);
    setItemOptionVisible(false);
    const newTransaction: Transaction = {
      _id: transaction._id,
      amount: transaction.amount,
      date: transaction.date,
      type: transaction.type,
      userId: transaction.userId,
      description: editValue,
    };
    try {
      updateTransaction(newTransaction);
    } catch (e) {}
  };

  useEffect(() => {
    if (isEditingDescription) {
      const editTimeout = setTimeout(() => {
        handleFinishEditing();
      }, 3000);
      return () => clearTimeout(editTimeout);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isItemOptionVisible, editValue, isEditingDescription]);

  return (
    <>
      {isItemOptionVisible ? (
        <TransactionItemPainel
          transaction={transaction}
          setIsEditing={() => handleEdit()}
        />
      ) : (
        <></>
      )}
      <TouchableOpacity
        style={
          isEditingDescription
            ? {...styles.container, ...styles.edit_background}
            : styles.container
        }
        onLongPress={handleLongPress}>
        <View style={styles.detailContainer}>
          <Text style={styles.date_text}>{formatDate(transaction.date)}</Text>
          <TextInput
            ref={inputRef}
            editable={isEditingDescription}
            onChangeText={str => setEditValue(str)}
            maxLength={13}
            style={styles.input_text}
            value={isEditingDescription ? editValue : transaction.description}
          />
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
