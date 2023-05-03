import {Formik} from 'formik';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Text, TouchableOpacity} from 'react-native';

import Container from '../../layout/Container';
import {styles} from './styles';
import CustomInput from '../../components/customInput';
import {ILogin} from '../../entities/User';
import {loginUser} from '../../services/signin';
import {loginSchema} from '../../schemas/singin';
import {loguser} from '../../redux/feature/userSlices';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../../App';

type Props = NativeStackScreenProps<StackParamList, 'Signin'>;

function SignIn({navigation}: Props): JSX.Element {
  const [enableInput, setEnableInput] = useState(true);
  const dispatch = useDispatch();

  const sendData = async (userData: ILogin) => {
    setEnableInput(false);
    try {
      const user = await loginUser(userData);
      dispatch(loguser(user));
      navigation.navigate('Home');
    } catch (e) {
      setEnableInput(true);
    }
  };

  return (
    <Container>
      <Text>MyWallet</Text>
      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={loginSchema}
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

export default SignIn;
