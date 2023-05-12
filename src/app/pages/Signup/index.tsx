import {Formik} from 'formik';
import React, {useState} from 'react';
import {Link} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {styles} from './styles';
import CustomInput from '../../components/customInput';
import {signupSchema} from '../../schemas/signupInputSchema';
import {createUser} from '../../../services/signup';
import {StackParamList} from '../../components/Navigator';
import {ISignup} from '../../../models/User';
import FormContainer from '../../layout/FormContainer';
import SubmitButton from '../../components/SubmitButton';

type Props = NativeStackScreenProps<StackParamList, 'Signup'>;

function SignUp({navigation}: Props): JSX.Element {
  const [enableInput, setEnableInput] = useState(true);

  const sendData = async (userData: ISignup) => {
    setEnableInput(false);
    try {
      await createUser(userData);
      navigation.navigate('Signin');
      setEnableInput(true);
    } catch (e) {
      setEnableInput(true);
    }
  };

  return (
    <FormContainer>
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
              errorMessage={errors.name}
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

            <CustomInput
              errorMessage={errors.confirmPassword}
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
            <SubmitButton
              onPress={handleSubmit}
              disabled={!isValid}
              title="Cadastrar"
            />
          </>
        )}
      </Formik>
      <Link to={{screen: 'Signin'}} style={styles.info_text}>
        Já tem uma conta? Entre agora!
      </Link>
    </FormContainer>
  );
}

export default SignUp;
