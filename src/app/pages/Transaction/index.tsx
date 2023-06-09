import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import CustomInput from '../../components/CustomInput';
import {Formik} from 'formik';
import {transactionSchema} from '../../schemas/transactionInputSchema';

import {
  convertIntoCurrencyValue,
  formatIntoNumericFormat,
} from '../../utils/convertIntoCurrencyInput';
import {useAppSelector} from '../../../redux/hooks';
import {StackParamList} from '../../components/Navigator';
import {useTransaction} from '../../../redux/hooks/useTransaction';
import {
  Transaction as ITransaction,
  ITransactionForm,
  TransactionType,
} from '../../../models/Transactions';
import Container from '../../layout/Container';
import {Header} from '../../components/Header';
import SubmitButton from '../../components/SubmitButton';

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
      _id: new Realm.BSON.ObjectId(),
      amount: Number(inputData.amount),
      description: inputData.description,
      type: type,
      userId: user._id,
      date: new Date(),
    };

    await createNewTransaction(transaction);
    navigation.navigate('Home');
  };

  return (
    <Container>
      <Header title={`Nova ${title}`} />
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
                maxLength: 13,
                value: values.description,
                onChangeText: handleChange('description'),
                onBlur: handleBlur('description'),
              }}
            />
            <SubmitButton
              title={`Salvar ${title}`}
              onPress={() => {
                values.amount = formatIntoNumericFormat(values.amount);
                handleSubmit();
              }}
              disabled={!isValid}
            />
          </>
        )}
      </Formik>
    </Container>
  );
}

export default Transaction;
