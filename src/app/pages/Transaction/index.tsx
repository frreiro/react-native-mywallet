import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import CustomInput from '../../components/customInput';
import {Formik} from 'formik';
import {transactionSchema} from '../../schemas/transactionInputSchema';
import {
  ITransactionForm,
  ITransaction,
  TransactionType,
} from '../../../entities/Transactions';
import {
  convertIntoCurrencyValue,
  formatIntoNumericFormat,
} from '../../utils/convertIntoCurrencyInput';
import {useAppSelector} from '../../../redux/hooks';
import {StackParamList} from '../../components/Navigator';
import {useTransaction} from '../../../redux/hooks/useTransaction';

type TransactionProps = NativeStackScreenProps<StackParamList, 'Transaction'>;

const checkTrasactionType = (type: TransactionType) => {
  if (type === 'in') {
    return {
      title: 'entrada',
    };
  } else {
    return {
      title: 'saída',
    };
  }
};

function Transaction({navigation, route}: TransactionProps): JSX.Element {
  const {type} = route.params;
  const {title} = checkTrasactionType(type);
  const user = useAppSelector(state => state.user);
  const {createNewTransaction} = useTransaction();

  const sendTransaction = async (inputData: ITransactionForm) => {
    const transaction: ITransaction = {
      amount: Number(inputData.amount),
      description: inputData.description,
      type: type,
      userId: user.id,
      date: new Date(),
      id: new Date().getTime(),
    };

    await createNewTransaction(transaction);
    console.log(transaction);
    navigation.navigate('Home');
  };

  return (
    <View>
      <Text>Nova {title}</Text>
      <Formik
        initialValues={{amount: '', description: ''} as ITransactionForm}
        validationSchema={transactionSchema}
        onSubmit={sendTransaction}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <CustomInput
              errorMessage={errors.amount}
              inputOption={{
                placeholder: 'Valor',
                inputMode: 'numeric',
                textContentType: 'none',
                value: convertIntoCurrencyValue(values.amount),
                onChangeText: handleChange('amount'),
                onBlur: handleBlur('amount'),
              }}
            />

            <CustomInput
              errorMessage={errors.description}
              inputOption={{
                placeholder: 'Descrição',
                textContentType: 'none',
                keyboardType: 'default',
                value: values.description,
                onChangeText: handleChange('description'),
                onBlur: handleBlur('description'),
              }}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                values.amount = formatIntoNumericFormat(values.amount);
                handleSubmit();
              }}
              disabled={!isValid}>
              <Text>Salvar {title}</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
}

export default Transaction;
