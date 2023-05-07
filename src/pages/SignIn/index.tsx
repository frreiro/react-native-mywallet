import {Formik} from 'formik';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Text, TouchableOpacity} from 'react-native';
import {Link} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {styles} from './styles';
import {ILogin} from '../../entities/User';
import Container from '../../layout/Container';
import {loginUser} from '../../services/signin';
import {loginSchema} from '../../schemas/singin';
import CustomInput from '../../components/customInput';
import {loguser} from '../../redux/feature/userSlices';
import {StackParamList} from '../../components/Navigator';

type Props = NativeStackScreenProps<StackParamList, 'Signin'>;

function SignIn({navigation}: Props): JSX.Element {
  const [enableInput, setEnableInput] = useState(true);
  const dispatch = useDispatch();

  const sendData = async (userData: ILogin) => {
    setEnableInput(false);
    try {
      const user = await loginUser(userData);
      //TODO: Salvar os dados do usuário em uma sessão local -> redux-persist ou asyncStorage
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
        initialValues={{email: '', password: ''} as ILogin}
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
              errorMessage={errors.email}
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
            <CustomInput
              errorMessage={errors.password}
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
            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit}
              disabled={!isValid}>
              <Text>Entrar</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
      <Link to={{screen: 'Signup'}} style={styles.info_text}>
        Primeira Vez? Cadastre-se!
      </Link>
    </Container>
  );
}

export default SignIn;
