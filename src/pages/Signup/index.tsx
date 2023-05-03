import {Formik} from 'formik';
import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {styles} from './styles';
import {StackParamList} from '../../App';
import {ISignup} from '../../entities/User';
import Container from '../../layout/Container';
import CustomInput from '../../components/customInput';
import {signupSchema} from '../../schemas/signup';
import {createUser} from '../../services/signup';

type Props = NativeStackScreenProps<StackParamList, 'Signup'>;

function SignUp({navigation}: Props): JSX.Element {
  const [enableInput, setEnableInput] = useState(true);

  const sendData = async (userData: ISignup) => {
    setEnableInput(false);
    try {
      await createUser(userData);
      navigation.navigate('Signin');
    } catch (e) {
      setEnableInput(true);
    }
  };

  return (
    <Container>
      <Text>MyWallet</Text>
      <Formik
        initialValues={
          {email: '', password: '', name: '', confirmPassword: ''} as ISignup
        }
        validationSchema={signupSchema}
        onSubmit={sendData}>
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
              inputOption={{
                editable: enableInput,
                placeholder: 'Nome',
                textContentType: 'name',
                keyboardType: 'default',
                value: values.name,
                onChangeText: handleChange('name'),
                onBlur: handleBlur('name'),
              }}
            />
            {errors.email && (
              <Text style={{fontSize: 10, color: 'red'}}>{errors.name}</Text>
            )}
            <CustomInput
              inputOption={{
                editable: enableInput,
                placeholder: 'E-mail',
                textContentType: 'emailAddress',
                keyboardType: 'email-address',
                value: values.email,
                onChangeText: handleChange('email'),
                onBlur: handleBlur('email'),
              }}
            />
            {errors.email && (
              <Text style={{fontSize: 10, color: 'red'}}>{errors.email}</Text>
            )}
            <CustomInput
              inputOption={{
                editable: enableInput,
                placeholder: 'Senha',
                secureTextEntry: true,
                textContentType: 'password',
                value: values.password,
                onChangeText: handleChange('password'),
                onBlur: handleBlur('password'),
              }}
            />
            {errors.password && (
              <Text style={{fontSize: 10, color: 'red'}}>
                {errors.password}
              </Text>
            )}

            <CustomInput
              inputOption={{
                editable: enableInput,
                placeholder: 'Confirme a senha',
                secureTextEntry: true,
                textContentType: 'password',
                value: values.confirmPassword,
                onChangeText: handleChange('confirmPassword'),
                onBlur: handleBlur('confirmPassword'),
              }}
            />
            {errors.confirmPassword && (
              <Text style={{fontSize: 10, color: 'red'}}>
                {errors.confirmPassword}
              </Text>
            )}
            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit}
              disabled={!isValid}>
              <Text>Enter</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
      <Text style={styles.info_text}>Primeira Vez? Cadastre-se!</Text>
    </Container>
  );
}

export default SignUp;
