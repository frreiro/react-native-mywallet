import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {StackParamList} from '../../App';
import CustomInput from '../../components/customInput';
import {Formik} from 'formik';
import {transactionSchema} from '../../schemas/transaction';
import {ITransactionForm, TransactionType} from '../../entities/Transactions';
import {
  convertIntoCurrencyValue,
  formatIntoNumericFormat,
} from '../../utils/convertIntoCurrencyInput';

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

function Transaction({route}: TransactionProps): JSX.Element {
  const {type} = route.params;
  const {title} = checkTrasactionType(type);

  return (
    <View>
      <Text>Nova {title}</Text>
      <Formik
        initialValues={{amount: '', description: ''} as ITransactionForm}
        validationSchema={transactionSchema}
        onSubmit={values => console.log(values)}>
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
